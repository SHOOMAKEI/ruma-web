<?php

namespace App\API\v1\Controllers\Auth;

use App\API\v1\Controllers\APIBase;
use App\API\v1\Requests\Auth\AuthAppUser;
use App\API\v1\Requests\Auth\UserOTP;
use App\API\v1\Traits\ApiResponse;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\OTPNotification;
use Dingo\Api\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Requests\TwoFactorLoginRequest;
use PragmaRX\Google2FA\Google2FA;

class AuthMobile extends APIBase
{
    use ApiResponse;
    public function index(){
        $response = [
            "success"=>true,
            'message'=>"welcome to api controller version 1",
        ];
        return response()->json($response,200);
    }

    public function login(AuthAppUser $request){

        if(!Auth::attempt(['username'=>$request->username,'password'=>$request->password])){
            return $this->error("Invalid Credentials Provided",401,null);
        }

        $user = Auth::User();

        if($user->hasRole( "mobile-app") && $user->is_active == 1) {

            $deviceToken = $user->generateDeviceToken($user->id.$request->device_id);
            $user->registerMobileDevice($request->device_id, $request->device_name,
                $request->device_os_id, $request->device_os_name,
                $user->id,$deviceToken);

            if ( $user->has_enable_otp === 1 || $user->has_enable_otp === true ) {
              // $user->notify(new OTPNotification($user->two_factor_secret));
               return $this->success(
                   ["csrf_token"=>$deviceToken,
                    'has_totp_active' => true,
                       'must_validate_totp' => true ],
                   "Provide OTP Code From Authenticator App", 200);
            } else {
                return $this->success(
                    ['token' => $user->createToken($request->device_id),
                    'userData' => $user->getBasicDetail(),
                        "csrf_token"=>$deviceToken ],
                    "User Successfully Authenticated", 200);
            }
        }else{
            return $this->error("Account is Not Authorized",401);
        }
    }

    public function verifyOTPCode(UserOTP $request){
        $user = User::where("username",$request->username)->first();

        if($user) {
            $user = Auth::loginUsingId($user->id);

            if ( $user->validDeviceToken($request->csrf_token, $request->device_id) === true) {

                if ($user->hasRole("mobile-app")
                    && ($user->is_active === 1 || $user->is_active === true)) {
                    $googleEngine = new Google2FA();

                    if ($googleEngine->verifyKey(decrypt($user->two_factor_secret), $request->totp_code) == 1) {
                        return $this->success(
                            ['token' => $user->createToken($request->device_id),
                                'userData' => $user->getBasicDetail(),
                                'device_token' => $request->csrf_token],
                            "User Successfully Authenticated", 200);
                    } else {
                        return $this->error("Invalid 2FA Code, Retry", 401, null);
                    }
                } else {
                    return $this->error("Invalid Credentials", 401, null);
                }

            } else {
                return $this->error("Invalid Credentials", 401);
            }
        }else{
            return $this->error("Invalid Credentials", 401);
        }
    }

    public function logout(){
        \auth()->user()->tokens()->delete();
        return $this->success(null,"tokens Revoked",200);
    }
}
