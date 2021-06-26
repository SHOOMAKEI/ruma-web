<?php

namespace App\GraphQL\Region\Queries;

use Modules\StoreManagement\Models\GeopoliticalZone;
use Illuminate\Support\Facades\Validator;

class GeopoliticalZoneQueries
{
    public function all(): array
    {
       return respondWithSuccess('geopolitical_zones', GeopoliticalZone::all());
    }

    public function show($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:geopolitical_zones,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return respondWithSuccess('geopolitical_zone', GeopoliticalZone::find($args['id']));
    }
}
