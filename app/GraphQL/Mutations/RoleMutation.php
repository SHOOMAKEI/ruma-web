<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\ValidationException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;

class RoleMutation
{
    public function create($_, array $args)
    {
        $validator =  Validator::make($args['input'],[
            'name' => ['required', 'string'],
            'permissions.*.id' => ['required', 'numeric', 'exists:permissions,id'],
        ]);

        if($validator->fails()) {
            return respondWithErrors($validator->errors()->all());
        }

        $role = Role::findOrCreate($args['input']['name']);

        $role->syncPermissions($args['input']['permissions']);

        return respondWithSuccess('role', $role);
    }
}
