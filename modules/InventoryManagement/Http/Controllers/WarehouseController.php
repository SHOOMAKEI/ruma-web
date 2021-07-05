<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Models\Warehouse;
use Modules\StoreManagement\Models\Region;

class WarehouseController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/Warehouse/Index');
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/Warehouse/Create', ['regions' => Region::all()]);
    }


    public function store(Request $request)
    {
        $this->validateRequest($request);

        Warehouse::create($this->getModelAttribute($request));

        return redirect()->route('warehouse.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(Warehouse $warehouse)
    {
        return inertia('Module/InventoryManagement/Warehouse/Edit',['warehouse'=> $warehouse, 'regions' => Region::all()]);
    }


    public function update(Request $request, Warehouse $warehouse)
    {
        $this->validateRequest($request);

        $warehouse->update($this->getModelAttribute($request));

        return redirect()->route('warehouse.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(Warehouse $warehouse)
    {
        if(!is_null($warehouse->id)) {

            $warehouse->delete();
        }

        return redirect()->route('warehouse.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'region_id' => ['required','numeric', 'exists:regions,id'],
            'phone' =>  ['sometimes', 'string', 'max:255'],
            'address' => ['sometimes', 'string', 'max:255'],
            'location' => ['sometimes', 'string', 'max:255'],
            'email' =>  ['sometimes', 'email', 'string', 'max:255'],
            'longitude' => ['sometimes', 'numeric'],
            'latitude' => ['sometimes', 'numeric']
        ]);
    }

    public function getModelAttribute(Request $request)
    {
        return [
            'name' => $request['name'],
            'code_name' => $request['code_name'],
            'district_id' => $request['district_id'],
            'phone' =>  isset($request['phone'])??null,
            'address' => isset($request['address'])??null,
            'location' => isset($request['location'])??null,
            'email' =>  isset($request['email'])??null,
            'longitude' => isset($request['longitude'])??null,
            'latitude' => isset($request['latitude'])??null
        ];
    }

}
