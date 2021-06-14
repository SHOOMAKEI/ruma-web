<?php

namespace App\GraphQL\Queries;

use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UtilitiesQueries
{
    public function myPermissions(): array
    {
       $user = User::find(auth()->user()->id);

       return respondWithSuccess('permissions', $user->getAllPermissions());
    }

    public function myRoles(): array
    {
        $user = User::find(auth()->user()->id);

        return respondWithSuccess('roles', $user->roles);
    }

    public function myCompanies(): array
    {
        $user = User::find(auth()->user()->id);

        return respondWithSuccess('companies', $user->companies);
    }

    public function userRoles($_, $agrs): array
    {
        $validator =  Validator::make($agrs,[
            'id' => ['required', 'numeric', 'exists:users,id'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $user = User::find($agrs['id']);

        if(is_null($user)) {

            return respondWithErrors('employee account not found.');
        }

        return respondWithSuccess('roles', $user->roles);
    }

}
