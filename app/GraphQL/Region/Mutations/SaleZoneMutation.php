<?php

namespace App\GraphQL\Region\Mutations;

use App\Models\Region\SaleZone;
use Illuminate\Support\Facades\Validator;

class SaleZoneMutation
{
    public function create($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        getActivityCauser();

        $sale_zone = SaleZone::create($this->getModelAttribute($args));

        return respondWithSuccess('sale_zone', $sale_zone);
    }

    public function update($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:sale_zones,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $sale_zone = SaleZone::find($args['input']['id']);

        getActivityCauser();

        $sale_zone->update($this->getModelAttribute($args));

        return respondWithSuccess('sale_zone', $sale_zone);
    }

    public function delete($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:sale_zones,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $sale_zone = SaleZone::find($args['id']);

        getActivityCauser();

        if(!is_null($sale_zone)){
            $sale_zone->delete();
        }

        return respondWithSuccess('sale_zone', $sale_zone);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args): ?array
    {
        $validator =  Validator::make($args['input'],[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'sale_zoneable.*.id' => ['required','numeric'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return null;
    }

    public function getModelAttribute(array $args)
    {
        return [
            'name' => $args['input']['name'],
            'code_name' => $args['input']['code_name'],
        ];
    }
}
