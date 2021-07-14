<?php

namespace App\GraphQL\Queries;
use App\Exceptions\ValidationException;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleAndPermissionQueries
{

    public function allRoles(): array
    {
        return respondWithSuccess('roles', Role::all());
    }

    public function allPermissions(): array
    {
        return respondWithSuccess('permissions', Permission::all());
    }

    public function findRole($_, array $agrs): array
    {
        $validator =  Validator::make($agrs,[
            'id' => ['required', 'numeric', 'exists:roles,id'],
        ]);

        if($validator->fails()) {
           return respondWithErrors( $validator->errors()->all());
        }

        return respondWithSuccess('role', Role::findById($agrs['id']));
    }

    public function findPermission($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required', 'numeric', 'exists:permissions,id'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return respondWithSuccess('permission', Permission::findById($args['id']));
    }
}
