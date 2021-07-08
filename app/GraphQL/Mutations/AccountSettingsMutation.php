<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\ValidationException;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Actions\DisableTwoFactorAuthentication;
use Laravel\Fortify\Actions\EnableTwoFactorAuthentication;
use Laravel\Fortify\Actions\GenerateNewRecoveryCodes;

class AccountSettingsMutation
{

    public function toggleOTP($_, array $args): array
    {

        $user = User::find( auth()->user()->id);

        if ($user->has_enable_otp == null) {
            $user->forceFill([
                'has_enable_otp' => false,
            ])->save();
        }

        if (!$user->has_enable_otp) {
            $user->forceFill([
                'two_factor_secret' => null,
                'two_factor_recovery_codes' => null,
            ])->save();
        }

        $user->forceFill([
            'has_enable_otp' => !$user->has_enable_otp,
        ])->save();

        return respondWithSuccess('user', $user);
    }

    public function updatePassword($_, array $args): array
    {
        $validator =  Validator::make($args['input'],[
            'password' => ['required', 'string', 'confirmed'],
        ]);

        if($validator->fails()) {
            return respondWithErrors($validator->errors()->all());
        }
        $user = User::find(auth()->user()->id);

        if (! Hash::check($args['input']['current_password'], $user->password)) {
            return respondWithErrors('The provided password does not match your current password.');
        }

        $user->forceFill([
            'password' => Hash::make($args['input']['password']),
        ])->save();

        return respondWithSuccess('user', $user);
    }

    public  function updateAccountInformation($_, array $args): array
    {
        $validator =  Validator::make($args['input'],[
            'username' =>['required', 'string', 'max:255', 'unique:users,username'],
            'email' => ['required', 'string', 'email', 'unique:users,email', 'max:255'],
            'mobile_number' => ['required', 'string', 'max:255', 'unique:users,mobile_number'],
        ]);

        if($validator->fails()) {
            return respondWithErrors($validator->errors()->all());
        }

        $user = User::find(auth()->user()->id);

        $user->forceFill([
            'username' => $args['input']['username'],
            'email' => $args['input']['email'],
            'mobile_number' => $args['input']['mobile_number'],
        ])->save();

        return respondWithSuccess('user', $user);
    }

    public function enableTwoFactorAuthentication(): array
    {
        $enable = App::make(EnableTwoFactorAuthentication::class);
        return $this->store2FACode($enable);
    }

    public function disableTwoFactorAuthentication(): array
    {
        $disable = App::make(DisableTwoFactorAuthentication::class);
        return $this->destroy2FACode($disable);
    }

    public function regenerate2FARecoveryCodes(): array
    {
        $user = User::find(auth()->user()->id);

        if (! $user->two_factor_secret ||
            ! $user->two_factor_recovery_codes) {
            return [
                'qrcode_svg' => null,
                'two_factor_recovery_codes' => null,
            ];
        }

        $regenerate = App::make(GenerateNewRecoveryCodes::class);
        return $this->regenerate2FACode($regenerate);
    }

    public function getRecoveryCodes(): object
    {
        $user = User::find(auth()->user()->id);
        if (! $user->two_factor_secret ||
            ! $user->two_factor_recovery_codes) {
            return (object) [
                'qrcode_svg' => null,
                'two_factor_recovery_codes' => null,
            ];
        }

        return (object) [
            'success' => true,
            'qrcode_svg' => null,
            'two_factor_recovery_codes' => collect(json_decode(decrypt($user->two_factor_recovery_codes), true))
                ->map(function ($code) {
                    $data['code'] = $code;
                    return $data;
                })->toArray()
        ];
    }

    public function store2FACode(EnableTwoFactorAuthentication $enable): array
    {
        $user = User::find(auth()->user()->id);

        if ($user->has_enable_otp) {
            $user->forceFill([
                'has_enable_otp' => !$user->has_enable_otp,
            ])->save();
        }

        $enable($user);

        return  [
            'success' => true,
            'qrcode_svg' => $user->twoFactorQrCodeSvg(),
            'two_factor_recovery_codes' => collect(json_decode(decrypt($user->two_factor_recovery_codes), true))
                ->map(function ($code) {
                    $data['code'] = $code;
                    return $data;
                })->toArray()
        ];
    }

    public function destroy2FACode(DisableTwoFactorAuthentication $disable): array
    {
        $user = User::find(auth()->user()->id);

        $disable($user);

        return [
            'success' => true,
            'qrcode_svg' => null,
            'two_factor_recovery_codes' => null
        ];
    }

    public function regenerate2FACode(GenerateNewRecoveryCodes $generate): array
    {
        $user = User::find(auth()->user()->id);
        $generate($user);

        return  [
            'success' => true,
            'qrcode_svg' => null,
            'two_factor_recovery_codes' => collect(json_decode(decrypt($user->two_factor_recovery_codes), true))
                ->map(function ($code) {
                    $data['code'] = $code;
                    return $data;
                })->toArray()
        ];
    }


}
