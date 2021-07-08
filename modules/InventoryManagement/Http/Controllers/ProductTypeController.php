<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Models\ProductBrand;
use Modules\InventoryManagement\Models\ProductType;

class ProductTypeController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/ProductType/Index');
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/ProductType/Create');
    }


    public function store(Request $request)
    {
        $this->validateRequest($request);

        ProductType::create($request->only(['name','code_name', 'description']));

        return redirect()->route('product-types.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(ProductType $product_type)
    {
        return inertia('Module/InventoryManagement/ProductType/Edit',['product_type'=> $product_type]);
    }


    public function update(Request $request, ProductType $product_type)
    {
        $this->validateRequest($request);

        $product_type->update($request->only(['name', 'code_name','description']));

        return redirect()->route('product-types.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(ProductType $product_type)
    {
        if(!is_null($product_type->id)) {

            $product_type->delete();
        }

        return redirect()->route('product-types.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code_name' => ['required', 'string', 'max:255', 'unique:product_types,code_name'],
            'description' => ['nullable', 'string', 'max:500']
        ]);
    }

}
