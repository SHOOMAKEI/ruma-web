<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Database\Factories\ProductSKU;
use Modules\InventoryManagement\Models\ProductPurchasingPrice;
use Modules\InventoryManagement\Models\ProductSellingPrice;
use Modules\InventoryManagement\Models\WarehouseStock;
use Modules\InventoryManagement\Models\WarehouseStockProductItem;
use Modules\InventoryManagement\Models\WarehouseStockProductItemCode;
use Modules\StoreManagement\Models\Region;

class WarehouseStockProductItemController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/WarehouseStockProductItem/Index',['warehouse_stock_product_items' => WarehouseStockProductItem::all()]);
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/WarehouseStockProductItem/Create', ['regions' => Region::all()]);
    }


    public function store(Request $request)
    {
        $this->validateRequest($request);

        $this->saveStockProductItem($request);

        return redirect()->route('warehouse_stock_product_item.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(WarehouseStockProductItem $warehouse_stock_product_item)
    {
        return inertia('Module/InventoryManagement/WarehouseStockProductItem/Edit',['warehouse_stock_product_item'=> $warehouse_stock_product_item, 'regions' => Region::all()]);
    }


    public function update(Request $request, WarehouseStockProductItem $warehouse_stock_product_item)
    {
        $this->validateRequest($request);

        $this->saveStockProductItem($request);

        return redirect()->route('warehouse_stock_product_item.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(WarehouseStockProductItem $warehouse_stock_product_item)
    {
        if(!is_null($warehouse_stock_product_item->id)) {

            $warehouse_stock_product_item->delete();
        }

        return redirect()->route('warehouse_stock_product_item.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'stock_code' => ['required', 'string','exists:warehouse_stocks,code'],
            'product_sku' => ['required', 'string','exists:product_s_k_us,name'],
            'imei_1' => ['required', 'numeric'],
            'imei_2' => ['nullable', 'numeric'],
            'serial_no' => ['nullable', 'string'],
            'selling_price_amount' => ['required', 'numeric'],
            'selling_price_start_date' => ['required'],
            'buying_price_amount' => ['required', 'numeric']
        ]);
    }

    public function getModelAttribute(Request $request)
    {
        return [
            'product_s_k_u_id' => $request['product_sku'],
            'warehouse_stock_id' => $request['stock_code'],
            'imei_1' => $request['imei_1'],
            'imei_2' => $request['imei_2'],
            'serial_no' => $request['serial_no'],
            'selling_price_amount' => $request['selling_price_amount'],
            'selling_price_start_date' => $request['selling_price_start_date'],
            'buying_price_amount' => $request['buying_price_amount'],
        ];
    }

    public function saveStockProductItem(Request $request)
    {
        $product_sku = ProductSKU::where('name',$request['sku_name'])->first();
        $warehouse_stock = WarehouseStock::where('code',$request['stock_code'])->first();
        $stock_item = WarehouseStockProductItem::updateOrCreate(
            ['product_s_k_u_id' => $product_sku->id,],
            ['warehouse_stock_id' => $warehouse_stock->id]);

        ProductSellingPrice::updateOrCreate(
            [
            'product_s_k_u_id' => $product_sku->id,
            'warehouse_stock_id' => $warehouse_stock->id
            ],[
            'amount' => $request['selling_price_amount'],
            'start_at' => $request['selling_price_start_date'],
         ]);

        ProductPurchasingPrice::updateOrCreate( [
            'product_s_k_u_id' => $product_sku->id,
            'warehouse_stock_id' => $warehouse_stock->id
        ],[
            'amount' => $request['selling_price_amount'],
        ]);

        if($request['imei_1']) {
            WarehouseStockProductItemCode::updateOrCreate([
                'key' => 'imei_1',
                'value' => $request['imei_1'],
                ],[
                'warehouse_stock_product_item_id' => $stock_item->id
            ]);
        }

        if($request['imei_2']) {
            WarehouseStockProductItemCode::updateOrCreate([
                'key' => 'imei_2',
                'value' => $request['imei_2']
                ],[
                'warehouse_stock_product_item_id' => $stock_item->id
            ]);
        }

        if($request['serial_no']) {
            WarehouseStockProductItemCode::updateOrCreate([
                'key' => 'serial_no',
                'value' => $request['serial_no']
                ],[
                'warehouse_stock_product_item_id' => $stock_item->id
            ]);
        }

    }

}
