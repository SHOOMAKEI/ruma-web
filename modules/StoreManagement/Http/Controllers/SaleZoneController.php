<?php

namespace Modules\StoreManagement\Http\Controllers;

use Illuminate\Http\Request;
use Modules\StoreManagement\Models\GeopoliticalZone;
use Modules\StoreManagement\Models\Region;
use Modules\StoreManagement\Models\SaleZone;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class SaleZoneController extends Controller
{
    public function index()
    {
        return inertia('Module/StoreManagement/SaleZone/Index',
            ['sale_zones' => SaleZone::all()]);
    }

    public function create()
    {
        return inertia('Module/StoreManagement/SaleZone/Create',
            ['sale_zones' => SaleZone::all()]);
    }

    public function store(Request $request)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        SaleZone::create($this->getModelAttribute($request->toArray()));

        return redirect()->route('sale_zones.index')->with(['status' => 'Operation Complete successful']);
    }

    public function edit(SaleZone $sale_zone)
    {
        return inertia('Module/StoreManagement/SaleZone/Edit',
            ['sale_zone' => $sale_zone]);
    }

    public function update(Request $request, SaleZone $sale_zone)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $sale_zone->update($this->getModelAttribute($request->toArray()));

        return redirect()->route('sale_zones.index')->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(SaleZone $sale_zone)
    {

        if(!is_null($sale_zone)){
            $sale_zone->delete();
        }

        return redirect()->route('sale_zones.index')->with(['status' => 'Operation Complete successful']);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args)
    {
        $validator =  Validator::make($args,[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'sale_zoneable.*.id' => ['required','numeric'],
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
        ];
    }
}
