<?php

namespace App\GraphQL\Region\Mutations;

use App\Models\Region\Region;
use Illuminate\Support\Facades\Validator;

class RegionMutation
{
    public function create($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        getActivityCauser();

        $region = Region::create($this->getModelAttribute($args));

        return respondWithSuccess('region', $region);
    }

    public function update($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:regions,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $region = Region::find($args['input']['id']);

        getActivityCauser();

        $region->update($this->getModelAttribute($args));

        return respondWithSuccess('region', $region);
    }

    public function delete($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:regions,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $region = Region::find($args['id']);

        getActivityCauser();

        if(!is_null($region)){
            $region->delete();
        }

        return respondWithSuccess('region', $region);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args): ?array
    {
        $validator =  Validator::make($args['input'],[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'geopolitical_zone_id' => ['required','numeric', 'exists:geopolitical_zones,id'],
            'longitude' => ['sometimes', 'numeric'],
            'latitude' => ['sometimes', 'numeric']
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
            'geopolitical_zone_id' => $args['input']['geopolitical_zone_id'],
            'longitude' => isset($args['input']['longitude'])??null,
            'latitude' => isset($args['input']['latitude'])??null
        ];
    }

}
