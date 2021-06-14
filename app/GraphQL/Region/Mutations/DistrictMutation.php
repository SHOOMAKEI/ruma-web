<?php

namespace App\GraphQL\Region\Mutations;

use App\Models\Region\District;
use Illuminate\Support\Facades\Validator;

class DistrictMutation
{
    public function create($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        getActivityCauser();

        $district = District::create($this->getModelAttribute($args));

        return respondWithSuccess('district', $district);
    }

    public function update($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:districts,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $district = District::find($args['input']['id']);

        getActivityCauser();

        $district->update($this->getModelAttribute($args));

        return respondWithSuccess('district', $district);
    }

    public function delete($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:districts,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $district = District::find($args['id']);

        getActivityCauser();

        if(!is_null($district)){
            $district->delete();
        }

        return respondWithSuccess('district', $district);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args): ?array
    {
        $validator =  Validator::make($args['input'],[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'region_id' => ['required','numeric', 'exists:regions,id'],
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
            'region_id' => $args['input']['region_id'],
            'longitude' => isset($args['input']['longitude'])??null,
            'latitude' => isset($args['input']['latitude'])??null
        ];
    }
}
