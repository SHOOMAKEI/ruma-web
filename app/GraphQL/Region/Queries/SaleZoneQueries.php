<?php

namespace App\GraphQL\Region\Queries;

use App\Models\Region\SaleZone;
use Illuminate\Support\Facades\Validator;

class SaleZoneQueries
{
    public function all(): array
    {
        return respondWithSuccess('sale_zones', SaleZone::all());
    }

    public function show($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:sale_zones,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return respondWithSuccess('sale_zone', SaleZone::find($args['id']));
    }
}
