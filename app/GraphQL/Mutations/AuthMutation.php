<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\ValidationException;
use App\Models\User;
use App\Notifications\VerifyEmailNotification;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\MessageBag;
use JetBrains\PhpStorm\ArrayShape;
use Laravel\Fortify\Actions\DisableTwoFactorAuthentication;
use Laravel\Fortify\Actions\EnableTwoFactorAuthentication;
use Laravel\Fortify\Actions\GenerateNewRecoveryCodes;
use Laravel\Fortify\Contracts\TwoFactorAuthenticationProvider;
use phpDocumentor\Reflection\Types\Mixed_;
use phpDocumentor\Reflection\Utils;
use UrlSigner;

use function PHPSTORM_META\type;

class AuthMutation
{
    /**
     * Get a JWT via given credentials.
     *
     * @param null $_
     * @param array $args
     * @return string[][][]
     */
    public function login($_, array $args): array
    {
        $validator =  Validator::make($args['input'],[
            'username' => ['required','exists:users,username'],
            'password' => ['required'],
            'device_name' => ['required']
        ], [
            'exists' => 'Incorrect credentials provided'
        ]);

        if($validator->fails()) {
            return  respondWithErrors($validator->errors()->all());
        }

        $user = User::where(['username' => $args['input']['username']])->first();

        if(!is_null($this->checkIfUserAccountPasswordIsCorrect($user, $args['input']['password']))){
            return $this->checkIfUserAccountPasswordIsCorrect($user, $args['input']['password']);
        }

        if(!is_null($this->checkIfUserAccountIsActive($user))){
            return $this->checkIfUserAccountIsActive($user);
        }


        if(!is_null($this->checkIfUserHasVerifyMobileNumber($user))){
           return $this->checkIfUserHasVerifyMobileNumber($user);
        }

        if(!is_null($this->checkIfUserHasEnable2FA($user))){
            return $this->checkIfUserHasEnable2FA($user);
        }

        if(!is_null($this->checkIfUserHasEnableOTP($user))){
            return $this->checkIfUserHasEnableOTP($user);
        }

        $credentials = ['email' => $user->email, 'password' => $args['input']['password']];

        if (! $token = $user->createToken($args['input']['device_name'])->plainTextToken) {
            return  respondWithErrors('Incorrect credentials provided');
        }

        return $this->respondWithToken($token, $user);
    }

    /**
     * Get the authenticated User.
     *
     * @param $_
     * @param array $args
     * @return array
     */
    public function me($_, array $args): array
    {
        return respondWithSuccess('user', User::find(auth()->user()->id));
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @param $_
     * @param array $args
     * @return array
     */
    #[ArrayShape(['success' => "boolean"])]
      public function logout($_, array $args): array
      {
          $user = User::find(auth()->user()->id);

          $user->tokens()->delete();

        return ['success' => true];
      }


    public function refresh($_, array $args)
    {
//        return $this->respondWithToken(auth()->refresh(),User::find(auth()->user()->id));
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     * @param User $user
     * @return array
     */
    #[ArrayShape([
        'user' => "\App\Models\User",
        'access_token' => "string",
        'success' => "bool",
        'token_type' => "string",
        'expires_in' => "float|int"])]
    protected function respondWithToken(string $token, User $user): array
    {
        return [
            'user' => $user,
            'access_token' => $token,
            'success' => true,
            'token_type' => 'bearer',
            'expires_in' => 'infinity'
        ];
    }

    #[ArrayShape(['errors' => "\string[][]", 'success' => "false"])]
    public function checkIfUserAccountPasswordIsCorrect(User $user, $password): ?array
    {
        if(! Hash::check($password, $user->password)) {
            return  respondWithErrors('Incorrect credentials provided');
        }
        return null;
    }

    #[ArrayShape(['errors' => "\string[][]", 'success' => "false"])]
    public function checkIfUserAccountIsActive(User $user): ?array
    {
        if(!$user->is_active || $user->deleted_at != null) {
            return  respondWithErrors('Your account is disabled');
        }

        return null;
    }

    #[ArrayShape(['user' => "\App\Models\User", 'success' => "bool"])]
    public function checkIfUserHasVerifyEmail(User $user): ?array
    {
        if( $user->email_verified_at==null) {
            return respondWithSuccess('user', $user);
        }

        return null;
    }

    #[ArrayShape(['user' => "\App\Models\User", 'success' => "bool"])]
    public function checkIfUserHasVerifyMobileNumber(User $user): ?array
    {
        if( ($user->mobile_number_verified_at == null)) {
            return respondWithSuccess('user', $user);
        }

        return null;
    }

    #[ArrayShape(['user' => "\App\Models\User", 'success' => "bool"])]
    public function checkIfUserHasEnableOTP(User $user): ?array
    {
        if(($user->has_enable_otp)) {
            return respondWithSuccess('user', $user);
        }

        return null;
    }



    public function resendEmailVerification($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'username' => ['required', 'string', 'exists:users,username']
        ]);

        if($validator->fails()) {
            return respondWithErrors($validator->errors()->all());
        }

        $user = User::where('username', $args['username'])->first();

        if (!$user->hasVerifiedEmail()) {
            try{
                $user->notify(new VerifyEmailNotification);
            }catch (\Exception $exception){
                return [
                    'errors'=> [
                        [
                            'message' => 'There is a problem with our server, please try again.'
                        ]

                    ],
                    'success' => false,
                ];
            }

        }

        return respondWithSuccess('status', 'Verification email has been sent successful.');

    }

    #[ArrayShape([
        'user' => "mixed",
        'token' => "null",
        'token_type' => "null",
        'errors' => "null",
        'success' => "bool"])]
    public function resendOtpCode($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'username' => ['required', 'string', 'exists:users,username']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $user = User::where('username', $args['username'])->first();

        try{
            $user->sendOtpCodeNotification();
        }catch(\Exception $e){
            return [
                'errors'=> [
                    [
                        'message' => 'There is a problem with our server, please try again.'
                    ]

                ],
                'success' => false,
            ];
        }

        return respondWithSuccess('status', 'OTP code has been sent successful.');
    }


    public function verifyOtpCode($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'username' => ['required', 'string', 'exists:users,username'],
            'otp_code' => ['required'],
            'device_name' => ['required', 'string']
        ]);

        if($validator->fails()) {
            return respondWithErrors($validator->errors()->all());
        }

        $user = User::where('username', $args['input']['username'])->first();

        if ($user->getOtpCodeForVerification() != $args['input']['otp_code']) {
            return [
                'user' => $user,
                'errors'=> [
                    [
                        'message' => 'Incorrect OTP Provided'
                    ]

                ],
                'success' => false,
            ];
        }

        $user->forceFill([
            'otp_code' => null,
            'otp_expired_at' => null,
        ])->save();

        return $this->respondWithToken($user->createToken($args['input']['device_name'])->plainTextToken, $user);
    }


    #[ArrayShape([
        'user' => "mixed",
        'errors' => "null",
        'success' => "bool"])]
    public function verifyEmail($_, array $args): array
    {
        $validator =  Validator::make($args['input'],[
            'id' => ['required', 'numeric', 'exists:users,id'],
            'hash' => ['required', 'string'],
            'signature' => ['required', 'string'],
            'expires' => ['required', 'numeric'],
        ]);

        if($validator->fails()) {
           return respondWithErrors($validator->errors()->all());
        }

        $user = User::find($args['input']['id']);
        $url =
            env('EMAIL_VERIFICATION_URL').
            '?hash='.$args['input']['hash'].
            '&id='.$args['input']['id'].
            '&expires='.$args['input']['expires'].
            '&signature='.$args['input']['signature'];

            if(!UrlSigner::validate($url)) {
              return respondWithErrors('the link signature is invalid please generate new link');
            }


        $user->markEmailAsVerified();

        return respondWithSuccess('status', 'your email has been verified successful.');

    }

    public function verify2FACode($_, array $args): array
    {

        $validator =  Validator::make($args,[
            'username' => ['required', 'string', 'exists:users,username'],
            'device_name' => ['required', 'string']
        ]);

        if($validator->fails()) {
            return respondWithErrors($validator->errors()->all());
        }

        $user = User::where('username', $args['username'])->first();

        if ($code = $this->valid2FARecoveryCode($user, $args)) {
            $user->replaceRecoveryCode($code);
        } elseif (! $this->hasValid2FACode($user, $args)) {
            return [
                'user' => $user,
                'errors'=> [
                    [
                        'message' => 'Incorrect 2FA code Provided'
                    ]

                ],
                'success' => false,
            ];
        }

        return $this->respondWithToken($user->createToken($args['device_name'])->plainTextToken, $user);
    }


    public function hasValid2FACode(User $user, array $args)
    {
        return $args['input']['code'] && app(TwoFactorAuthenticationProvider::class)->verify(
                decrypt($user->two_factor_secret),
                $args['input']['code']
            );
    }

    public function valid2FARecoveryCode(User $user, array $args)
    {
        if (! $args['input']['recovery_code']) {
            return;
        }

        return collect($user->recoveryCodes())->first(function ($code) use ($args) {

            return hash_equals($args['input']['recovery_code'], $code) ? $code : null;
        });
    }

    #[ArrayShape([
        'user' => "\App\Models\User",
        'success' => "bool" ])]
    public function checkIfUserHasEnable2FA(User $user): ?array
    {
        if ($user->two_factor_secret || $user->two_factor_recovery_codes) {
            return respondWithSuccess('user', $user);
        }

        return  null;
    }


}
