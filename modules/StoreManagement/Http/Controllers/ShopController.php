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
        return inertia('Module/StoreManagement/Shop/Index',
            ['shops' => Shop::with('district')->get()]);
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

        Shop::create($this->getModelAttribute($request->toArray()));

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

    public function destroy  (Shop $shop)
    {

        if(!is_null($shop)){
            $shop->delete();
        }

        return redirect()->route('shops.index')->with(['status' => 'Operation Complete successful']);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args)
    {
        $validator =  Validator::make($args,[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'district_id' => ['required','numeric', 'exists:districts,id'],
            'phone' =>  ['sometimes', 'string', 'max:255'],
            'address' => ['sometimes', 'string', 'max:255'],
            'location' => ['sometimes', 'string', 'max:255'],
            'email' =>  ['sometimes', 'email', 'string', 'max:255'],
            'longitude' => ['sometimes', 'required', 'numeric'],
            'latitude' => ['sometimes', 'required','numeric']
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        return null;
    }

    public function getModelAttribute(array $args)
    {
        return [
            'name' => $args['name'],
            'code_name' => $args['code_name'],
            'district_id' => $args['district_id'],
            'phone' =>  isset($args['phone'])??null,
            'address' => isset($args['address'])??null,
            'location' => isset($args['location'])??null,
            'email' =>  isset($args['email'])??null,
            'longitude' =>$args['longitude'],
            'latitude' => $args['latitude']
        ];
    }
}
