<?php

namespace App\Http\Controllers;

use App\Actions\Fortify\CreateNewUser;
use App\Models\Company;
use App\Models\User;
use App\Notifications\NewAccountResetPasswordNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
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
            ['roles' => Role::all()->map(function ($role){
                $data['id'] = (string) $role->id;
                $data['text'] = $role->name;

                return $data;
            }),
            'companies' => Company::all()->map(function ($company){
                $data['id'] = (string) $company->id;
                $data['text'] = $company->name;

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

        $user = User::create($this->getModelAttribute($request->toArray()));

        if(!empty($request['photo'])){
            uploadBase64Image($user, 'profile-photo', $request['photo'], true);
        }

        $roleData = [];
        $index = 0;
        foreach ($request['roles'] as $role) {
            $roleData[$index] = $role['id'];
            $index++;
        }

        $user->syncRoles($roleData);

        $companyData = [];
        $index = 0;
        foreach ($request['roles'] as $role) {
            $companyData[$index] = $role['id'];
            $index++;
        }

        $user->companies()->sync($companyData);

        if($request['send_reset_password_notification']) {

            $token =  insertForgotPasswordUserToDatabase($user);

            $user->notify(new NewAccountResetPasswordNotification($token));
        }

        return redirect()->route('users.index')->with(['status' => 'Operation Complete successful']);

    }


    public function edit(User $user)
    {
        return inertia('Account/Create',
            ['roles' => Role::all()->map(function ($role){
                $data['id'] = (string) $role->id;
                $data['text'] = $role->name;

                return $data;
            }),
                'companies' => Company::all()->map(function ($company){
                    $data['id'] = (string) $company->id;
                    $data['text'] = $company->name;

                    return $data;
                }),
                'user' => $user
            ]);
    }


    public function update(Request $request, User $user)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $user->update($this->getModelAttribute($request->toArray()));

        $roleData = [];
        $index = 0;
            foreach ($request['roles'] as $role) {
                $roleData[$index] = $role['id'];
                $index++;
            }

        $user->syncRoles($roleData);

        $companyData = [];
        $index = 0;
            foreach ($request['roles'] as $role) {
                $companyData[$index] = $role['id'];
                $index++;
            }

        $user->companies()->sync($companyData);

        if(!empty($request['photo'])){
            uploadBase64Image($user, 'profile-photo', $request['photo'], true);
        }

        if($request['send_reset_password_notification']) {

            $token =  insertForgotPasswordUserToDatabase($user);

            $user->notify(new NewAccountResetPasswordNotification($token));
        }

        return redirect()->route('users.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(user $user)
    {
        if(!is_null($user)) {
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
            'role.*.id' => ['required','numeric', 'exists:roles,id'],
            'companies.*.id' => ['required', 'numeric', 'exists:companies,id'],
            'is_active' => ['required', 'bool'],
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
            'password' => $args['password'],
            'is_active' => $args['is_active'],
        ];
    }
}
