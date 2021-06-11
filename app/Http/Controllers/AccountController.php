<?php

namespace App\Http\Controllers;

use App\Actions\Fortify\CreateNewUser;
use App\Models\Company;
use App\Models\User;
use App\Notifications\NewAccountResetPasswordNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AccountController extends Controller
{

    public function index()
    {
        return  inertia('Account/Index', [
            'users' => User::with('roles')->get()
        ]);
    }

    public function create()
    {
        return inertia('Account/Create',
            ['roles' => Role::where('guard_name','web')->get()->map(function ($role){
                $data['value'] = (string) $role->id;
                $data['label'] = $role->name;

                return $data;
            }),
            'companies' => Company::all()->map(function ($company){
                $data['value'] = (string) $company->id;
                $data['label'] = $company->name;

                return $data;
            }),
             'permissions' => Permission::where('guard_name', 'web')->get()->map(function ($permission){
                $data['id'] =  $permission->id;
                $data['name'] = $permission->name;
                $data['checked'] = false;

                return $data;
            })
            ]);
    }


    public function store(Request $request)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        DB::transaction(function () use ($request) {
            $user = User::create($this->getModelAttribute($request->toArray()));

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

        return redirect()->route('users.index')->with(['status' => 'Operation Complete successful']);

    }


    public function edit(User $user)
    {
        $account['id'] =  $user->id;
        $account['email'] =  $user->email;
        $account['username'] =  $user->username;
        $account['is_active'] =  $user->is_active;
        $account['companies'] =  $user->companies->map(function ($company){
            $data['value'] = (string) $company->id;
            $data['label'] = $company->name;

            return $data;
        });
        $account['account_roles'] =  $user->roles->map(function ($role){
            $data['value'] = (string) $role->id;
            $data['label'] = $role->name;

            return $data;
        });
        $account['permissions'] = Permission::where('guard_name', 'web')->get()->map(function ($permission) use ($user){
        $data['id'] =  $permission->id;
        $data['name'] = $permission->name;
        $data['checked'] = $user->hasPermissionTo($permission->name);

        return $data;
    });

        return inertia('Account/Edit',
            ['roles' => Role::where('guard_name','web')->get()->map(function ($role){
                $data['value'] = (string) $role->id;
                $data['label'] = $role->name;

                return $data;
            }),
                'companies' => Company::all()->map(function ($company){
                    $data['value'] = (string) $company->id;
                    $data['label'] = $company->name;

                    return $data;
                }),
                'user' => $account
            ]);
    }


    public function update(Request $request, User $user)
    {
        if(($user->email != $request['email'])) {
            $validator =  Validator::make($request->toArray(),[
                'email' => ['required', 'email', 'string', 'max:255', 'unique:users,email'],
            ]);

            if($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
        }

        if(($user->username != $request['username'])) {
            $validator =  Validator::make($request->toArray(),[
                'username' => ['required', 'string', 'max:255', 'unique:users,username'],
            ]);

            if($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
        }

        if(!is_null( $request['password'])) {
            $validator =  Validator::make($request->toArray(),[
                'password' => ['required','string', 'max:255', 'confirmed'],
            ]);

            if($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
        }
        if(!is_null($request['photo']))
        {
            $validator =  Validator::make($request->toArray(),[
                'photo' => ['sometimes', 'base64image'],
            ]);


            if($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
        }

        $validator =  Validator::make($request->toArray(),[
            'roles.*.value' => ['required','numeric', 'exists:roles,id'],
            'companies.*.value' => ['required', 'numeric', 'exists:companies,id'],
            'is_active' => ['required', 'boolean'],
            'permissions.*.id' => ['required', 'numeric', 'exists:permissions,id']
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }


        DB::transaction(function () use ($request, $user) {
            $user->forceFill([
                'email' => $request['email'],
                'username' => $request['username'],
                'is_active' => $request['is_active']
            ])->save();

            if(!is_null($request['password'])){
                $user->forceFill([
                    'password' => Hash::make($request['password'])
                ])->save();
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

            if(!empty($request['permissions'])){

                $permissions = array_filter($request['permissions'], function($permission) {
                    return $permission['checked'] == true;
                } );

                $user->permissions()->detach();

                collect($permissions)->map(function ($permission) use ($user){

                    $user->givePermissionTo($permission['name']);

                });

            }

            if(!empty($request['photo'])){
                uploadBase64Image($user, 'profile-photo', $request['photo'], true);
            }

            if($request['send_reset_password_notification']) {

                $token =  insertForgotPasswordUserToDatabase($user);

                $user->notify(new NewAccountResetPasswordNotification($token));
            }

        });

        return redirect()->route('users.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(user $user)
    {


        if(!is_null($user)) {
            $user->companies()->detach();
            $user->delete();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
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
