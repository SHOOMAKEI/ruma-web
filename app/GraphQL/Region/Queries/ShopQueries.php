<?php

namespace App\GraphQL\Region\Queries;

use Modules\StoreManagement\Models\Shop;
use Illuminate\Support\Facades\Validator;

class ShopQueries
{
    public function all(): array
    {
        return respondWithSuccess('shops', Shop::all());
    }

    public function show($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:shops,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return respondWithSuccess('shop', Shop::find($args['id']));
    }
}
