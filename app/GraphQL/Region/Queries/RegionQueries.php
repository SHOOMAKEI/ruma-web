<?php

namespace App\GraphQL\Region\Queries;

use App\Models\Region\Region;
use Illuminate\Support\Facades\Validator;

class RegionQueries
{
    public function all(): array
    {
        return respondWithSuccess('regions', Region::all());
    }

    public function show($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:regions,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return respondWithSuccess('region', Region::find($args['id']));
    }
}
