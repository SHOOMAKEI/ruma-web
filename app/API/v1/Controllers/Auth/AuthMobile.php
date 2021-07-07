<?php

namespace App\API\v1\Controllers\Auth;

use App\API\v1\Controllers\APIBase;
use App\API\v1\Requests\Auth\AuthAppUser;
use App\API\v1\Traits\ApiResponse;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\OTPNotification;
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
        $validation = $request->validate([
           "username"=>"required|string",
           'password'=>"required|string",
           'device_id'=>"required|string",
           'device_name'=>"required|string",
            "device_os_id"=>"required",
            "device_os_name"=>"required"
        ]);

        if(!Auth::attempt(['username'=>$validation['username'],'password'=>$validation['password']])){
            return $this->error("Invalid Credentials Provided",401);
        }

        $user = Auth::User();
        if($user->hasRole( "mobile-app") && $user->is_active == 1) {
            $user->registerMobileDevice($validation['device_id'], $validation['device_name'],
                $request->device_os_id, $request->device_os_name, $user->id,$user->generateDeviceToken($validation['device_id']));

            if ($user->has_enable_otp === 1) {
              // $user->notify(new OTPNotification($user->two_factor_secret));
               return $this->success(['has_totp_active' => true, 'must_validate_totp' => true], "Provide OTP Code From Authenticator App", 200);
            } else {
                return $this->success(['token' => $user->createToken($validation['device_id']),
                    'userData' => $user->getBasicDetail()], "User Successfully Authenticated", 200);
            }
        }else{
            return $this->error("Account is Not Authorized",401);
        }
    }

    public function verifyOTPCode(Request $request){
        $validation = $request->validate([
            "username"=>"required|string",
            "totp_code" => "required|string",
            'device_id' => "required|string"
        ]);
       if(Auth::attempt(["username"=>$request->email])) {
            $user = Auth::User();
           if($user->hasRole( "mobile-app") && $user->is_active === 1) {
               $googleEngine = new Google2FA();
               if ($googleEngine->verifyKey(decrypt($user->two_factor_secret), $request->totp_code) == 1) {
                   return $this->success(['token' => $user->createToken($validation['device_id']),
                       'userData' => $user->getBasicDetail()], "User Successfully Authenticated", 200);
               } else {
                   return $this->error("Invalid 2FA Code, Retry", 401);
               }
           }else{
               return $this->error("Invalid Credentials", 401);
           }

        }else{
           return $this->error("Invalid Credentials",401);
       }
    }

    public function logout(){
        \auth()->user()->tokens()->delete();
        return $this->success(null,"tokens Revoked",200);
    }
}
