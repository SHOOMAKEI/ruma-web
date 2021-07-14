<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\ValidationException;
use App\Models\User;
use App\Notifications\ForgotPasswordNotification;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use JetBrains\PhpStorm\ArrayShape;

class PasswordResetMutation
{
    public function update($_, $args)
    {
        $user = auth()->user();

        if (! Hash::check($args['input']['current_password'], $user->password)) {
            return respondWithErrors('The provided password does not match your current password.');

        }


        $user->forceFill([
            'password' => Hash::make($args['input']['password']),
        ])->save();

        return [
            'errors' => null,
            'success' => true
        ];
    }

    public function forgotPassword($_, $args)
    {
        $validator =  Validator::make($args,[
            'username' => ['required','string', 'exists:users,username'],
        ]);

        if($validator->fails()) {
            return respondWithErrors($validator->errors()->all());
        }

        $user = User::where('username', $args['username'])->first();

       $token =  insertForgotPasswordUserToDatabase($user);

        try{
            $user->notify(new ForgotPasswordNotification($token));
        } catch (\Exception $exception){
             return [
                 'errors' => [['message' => 'There is a problem with our server, please try again.']],
                 'success' => false
             ];
        }

        $hidden_email = str_replace(substr($user->email,0,strpos($user->email,'@')),'*********', $user->email);
        return [
            'status' => "link for reset password has been sent to the email end with {$hidden_email}",
            'errors' => null,
            'success' => true
        ];
    }

    public function resetPassword($_, array $args): array
    {
        $validator =  Validator::make($args['input'],[
            'username' => ['required', 'string', 'exists:users,username'],
            'token' => ['required', 'string'],
            'password' => ['required', 'string', 'confirmed'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $user = User::where('username', $args['input']['username'])->first();

        $result = DB::table('password_resets')
            ->where('email', $args['input']['username'])
            ->where('token', $args['input']['token'])->first();

        if (!isset($result->email)) {
            return respondWithErrors('Invalid token provided.');

        }

        DB::table('password_resets')
            ->where('email', $args['input']['username'])
            ->where('token', $args['input']['token'])->delete();

        $user->forceFill([
            'password' => Hash::make($args['input']['password']),
        ])->save();

        return [
            'status' => 'Your password has been reset.',
            'errors' => null,
            'success' => true
        ];
    }
}
