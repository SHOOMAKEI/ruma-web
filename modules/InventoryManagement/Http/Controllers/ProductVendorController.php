<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Models\ProductBrand;
use Modules\InventoryManagement\Models\ProductVendor;

class ProductVendorController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/ProductVendor/Index');
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/ProductVendor/Create');
    }


    public function store(Request $request)
    {
        $this->validateRequest($request);

        ProductVendor::create($request->only(['name','code_name', 'description']));

        return redirect()->route('product-vendors.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(ProductVendor $product_vendor)
    {
        return inertia('Module/InventoryManagement/ProductVendor/Edit',['product_vendor'=> $product_vendor]);
    }


    public function update(Request $request, ProductVendor $product_vendor)
    {
        $this->validateRequest($request);

        $product_vendor->update($request->only(['name', 'code_name','description']));

        return redirect()->route('product-vendors.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(ProductVendor $product_vendor)
    {
        if(!is_null($product_vendor->id)) {

            $product_vendor->delete();
        }

        return redirect()->route('product-vendors.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code_name' => ['required', 'string', 'max:255', 'unique:product_vendors,code_name'],
            'description' => ['nullable', 'string', 'max:500']
        ]);
    }

}
