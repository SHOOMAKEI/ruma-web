<?php

namespace App\GraphQL\Region\Queries;

use App\Models\Region\District;
use Illuminate\Support\Facades\Validator;

class DistrictQueries
{
    public function all(): array
    {
        return respondWithSuccess('districts', District::all());
    }

    public function show($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:districts,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return respondWithSuccess('district', District::find($args['id']));
    }
}
