<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Models\Warehouse;
use Modules\InventoryManagement\Models\WarehouseStock;
use Modules\StoreManagement\Models\Region;

class WarehouseStockController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/WarehouseStock/Index',['warehouse_stocks' => WarehouseStock::all()]);
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/WarehouseStock/Create', ['warehouses' => Warehouse::all()]);
    }


    public function store(Request $request)
    {
        $this->validateRequest($request);

        WarehouseStock::create($this->getModelAttribute($request));

        return redirect()->route('warehouse_stock.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(WarehouseStock $warehouse_stock)
    {
        return inertia('Module/InventoryManagement/WarehouseStock/Edit',['warehouse_stock'=> $warehouse_stock, 'warehouses' => Warehouse::all()]);
    }


    public function update(Request $request, WarehouseStock $warehouse_stock)
    {
        $this->validateRequest($request);

        $warehouse_stock->update($this->getModelAttribute($request));

        return redirect()->route('warehouse-stocks.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(WarehouseStock $warehouse_stock)
    {
        if(!is_null($warehouse_stock->id)) {

            $warehouse_stock->delete();
        }

        return redirect()->route('warehouse-stocks.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'code' => ['required','string', 'max:255'],
            'date_in' => ['required','string', 'max:255'],
            'warehouse_id' => ['required','numeric', 'exists:warehouses,id'],
        ]);
    }

    public function getModelAttribute(Request $request)
    {
        return [
            'code' => $request['code'],
            'date_in' => $request['date_in'],
            'warehouse_id' => $request['warehouse_id']
        ];
    }

}
