<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Models\ProductBrand;

class ProductBrandController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/ProductBrand/Index');
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/ProductBrand/Create');
    }


    public function store(Request $request)
    {
        $this->validateRequest($request);

        ProductBrand::create($request->only(['name','code_name', 'description']));

        return redirect()->route('product-brands.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(ProductBrand $product_brand)
    {
        return inertia('Module/InventoryManagement/ProductBrand/Edit',['product_brand'=> $product_brand]);
    }


    public function update(Request $request, ProductBrand $product_brand)
    {
        $this->validateRequest($request);

        $product_brand->update($request->only(['name', 'code_name','description']));

        return redirect()->route('product-brands.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(ProductBrand $product_brand)
    {
        if(!is_null($product_brand->id)) {

            $product_brand->delete();
        }

        return redirect()->route('product-brands.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code_name' => ['required', 'string', 'max:255', 'unique:product_brands,code_name'],
            'description' => ['nullable', 'string', 'max:500']
        ]);
    }

}
