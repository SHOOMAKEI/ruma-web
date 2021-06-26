<?php

namespace App\GraphQL\Region\Mutations;

use Modules\StoreManagement\Models\GeopoliticalZone;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use JetBrains\PhpStorm\ArrayShape;
use Spatie\Activitylog\Facades\CauserResolver;

class GeopoliticalZoneMutation
{
    public function create($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        getActivityCauser();

         $geozone = GeopoliticalZone::create($this->getModelAttribute($args));

         return respondWithSuccess('geopolitical_zone', $geozone);
    }

    public function update($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:geopolitical_zones,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $geozone = GeopoliticalZone::find($args['input']['id']);

        getActivityCauser();

        $geozone->update($this->getModelAttribute($args));

        return respondWithSuccess('geopolitical_zone', $geozone);
    }

    public function delete($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:geopolitical_zones,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $geozone = GeopoliticalZone::find($args['id']);

        getActivityCauser();

        if(!is_null($geozone)){
            $geozone->delete();
        }

        return respondWithSuccess('geopolitical_zone', $geozone);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args): ?array
    {
        $validator =  Validator::make($args['input'],[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'country_id' => ['required','numeric', 'exists:countries,id'],
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
            'country_id' => $args['input']['country_id'],
            'longitude' => isset($args['input']['longitude'])??null,
            'latitude' => isset($args['input']['latitude'])??null
        ];
    }

}
