<?php

namespace App\GraphQL\Queries;

use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserQueries
{
    public function users(): array
    {
        return respondWithSuccess('users', User::with('employee')->get()->toArray());
    }

    public function findUser($_, $agrs): array
    {
        $validator =  Validator::make($agrs,[
            'id' => ['required', 'numeric', 'exists:users,id'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }
        return respondWithSuccess('user', User::find($agrs['id']));
    }
}
