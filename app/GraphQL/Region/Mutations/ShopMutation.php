<?php

namespace App\GraphQL\Region\Mutations;

use Modules\StoreManagement\Models\Shop;
use Illuminate\Support\Facades\Validator;

class ShopMutation
{
    public function create($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        getActivityCauser();

        $shop = Shop::create($this->getModelAttribute($args));

        return respondWithSuccess('shop', $shop);
    }

    public function update($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:shops,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $shop = Shop::find($args['input']['id']);

        getActivityCauser();

        $shop->update($this->getModelAttribute($args));

        return respondWithSuccess('shop', $shop);
    }

    public function delete($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:shops,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $district = Shop::find($args['id']);

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
            'district_id' => ['required','numeric', 'exists:districts,id'],
            'phone' =>  ['sometimes', 'string', 'max:255'],
            'address' => ['sometimes', 'string', 'max:255'],
            'location' => ['sometimes', 'string', 'max:255'],
            'email' =>  ['sometimes', 'email', 'string', 'max:255'],
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
            'district_id' => $args['input']['district_id'],
            'phone' =>  isset($args['input']['phone'])??null,
            'address' => isset($args['input']['address'])??null,
            'location' => isset($args['input']['location'])??null,
            'email' =>  isset($args['input']['email'])??null,
            'longitude' => isset($args['input']['longitude'])??null,
            'latitude' => isset($args['input']['latitude'])??null
        ];
    }
}
