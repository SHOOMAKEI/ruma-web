<?php


namespace App\Repository;


use App\Models\User;
use App\Notifications\NewAccountResetPasswordNotification;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserAccountRepository
{
    public function createAccount(array $request)
    {
        if(!is_null($this->validateInput($request)))
        {
            return $this->validateInput($request);
        }

        DB::transaction(function () use ($request) {
            $user = User::create($this->getModelAttribute($request));

            if(!empty($request['photo'])){
                uploadBase64Image($user, 'profile-photo', $request['photo'], true);
            }

            $roleData = [];
            $index = 0;
            foreach ($request['roles'] as $role) {
                $roleData[$index] = $role['value'];
                $index++;
            }

            $user->syncRoles($roleData);

            $companyData = [];
            $index = 0;
            foreach ($request['companies'] as $role) {
                $companyData[$index] = $role['value'];
                $index++;
            }

            $user->companies()->sync($companyData);

            $permissions = array_filter($request['permissions'], function($permission) {
                return $permission['checked'] == true;
            } );

            $user->permissions()->detach();

            collect($permissions)->map(function ($permission) use ($user){

                $user->givePermissionTo($permission['name']);

            });

            if($request['send_reset_password_notification']) {

                $token =  insertForgotPasswordUserToDatabase($user);

                $user->notify(new NewAccountResetPasswordNotification($token));
            }

        });

        return null;
    }

    public function validateInput(array $args)
    {
        $validator =  Validator::make($args,[
            'email' => ['required', 'email', 'string', 'max:255', 'unique:users,email'],
            'username' => ['required','string' , 'unique:users,username', 'max:255'],
            'password' => ['required','string', 'max:255', 'confirmed'],
            'roles.*.value' => ['required','numeric', 'exists:roles,id'],
            'companies.*.value' => ['required', 'numeric', 'exists:companies,id'],
            'is_active' => ['required', 'boolean'],
        ]);

        if(!is_null($args['photo']))
        {
            $validator =  Validator::make($args,[
                'photo' => ['sometimes', 'base64image'],
            ]);


            if($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
        }

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        return null;
    }

    public function getModelAttribute(array $args): array
    {
        return [
            'email' => $args['email'],
            'username' => $args['username'],
            'password' => Hash::make($args['password']),
            'is_active' => $args['is_active'],
        ];
    }
}
