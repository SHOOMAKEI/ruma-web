<?php

namespace App\API\v1\Controllers\Auth;

use App\API\v1\Controllers\APIBase;
use App\API\v1\Requests\Auth\AuthAppUser;
use App\API\v1\Traits\ApiResponse;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

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
           "email"=>"required|string|email",
           'password'=>"required|string",
           'device_id'=>"required|string",
           'device_name'=>"required|string",
            "device_os_id"=>"required",
            "device_os_name"=>"required"
        ]);

        if(!Auth::attempt(['email'=>$validation['email'],'password'=>$validation['password']])){
            return $this->error("Invalid Credentials Provided",401);
        }

        $user = Auth::User();
        if($user->hasRole( "mobile-app") && $user->is_active === 1) {
            $user->registerMobileDevice($validation['device_id'], $validation['device_name'],
                $request->device_os_id, $request->device_os_name, $user->id);

            if ($user->has_enable_otp === 1) {
               return $this->success(['has_otp_active' => true, 'must_validate_otp' => true], "Provide OTP Code sent to Email", 200);
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
            "otp_code"=>"required|string",
            'device_id'=>"required|string",
            'device_name'=>"required|string"
        ]);
        if(!Auth::attempt(['email'=>$validation['email'],'password'=>$validation['password']])){
            return $this->error("Invalid Credentials Provided",401);
        }else{
            $user = Auth::User();
            return $this->success(['token'=>$user->createToken($validation['device_id']),
                'userData'=>$user->getBasicDetail()],"User Successfully Authenticated",200);;
        }
    }

    public function logout(){
        \auth()->user()->tokens()->delete();
        return $this->success(null,"tokens Revoked",200);
    }
}
