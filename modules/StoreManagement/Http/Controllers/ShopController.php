<?php

namespace Modules\StoreManagement\Http\Controllers;

use Illuminate\Http\Request;
use Modules\StoreManagement\Models\District;
use Modules\StoreManagement\Models\SaleZone;
use Modules\StoreManagement\Models\Shop;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class ShopController extends Controller
{
    public function index()
    {
        return inertia('Module/StoreManagement/Shops/Index',
            ['shops' => Shop::all()]);
    }

    public function create()
    {
        return inertia('Module/StoreManagement/Shop/Create',
            ['districts' => District::all()]);
    }

    public function store(Request $request)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $shop = Shop::create($this->getModelAttribute($request->toArray()));

        return redirect()->route('shops.index')->with(['status' => 'Operation Complete successful']);
    }

    public function edit(Shop $shop)
    {
        return inertia('Module/StoreManagement/Shop/Edit',
            ['districts' => District::all(), 'shop' => $shop]);
    }

    public function update(Request $request, Shop $shop)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $shop->update($this->getModelAttribute($request->toArray()));

        return redirect()->route('shops.index')->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(Shop $shop): array
    {

        if(!is_null($shop)){
            $shop->delete();
        }

        return respondWithSuccess('district', $district);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args)
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
            return redirect()->back()->withErrors($validator);
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
