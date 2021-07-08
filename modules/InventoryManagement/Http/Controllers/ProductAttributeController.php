<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Models\ProductBrand;
use Modules\InventoryManagement\Models\ProductAttribute;

class ProductAttributeController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/ProductAttribute/Index');
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/ProductAttribute/Create');
    }


    public function store(Request $request)
    {
        $this->validateRequest($request);

        ProductAttribute::create($request->only(['name','code_name', 'description']));

        return redirect()->route('product-attribute_categories.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(ProductAttribute $product_attribute)
    {
        return inertia('Module/InventoryManagement/ProductAttribute/Edit',['product_attribute'=> $product_attribute]);
    }


    public function update(Request $request, ProductAttribute $product_attribute)
    {
        $this->validateRequest($request);

        $product_attribute->update($request->only(['name', 'code_name','description']));

        return redirect()->route('product-attributes.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(ProductAttribute $product_attribute)
    {
        if(!is_null($product_attribute->id)) {

            $product_attribute->delete();
        }

        return redirect()->route('product-attributes.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code_name' => ['required', 'string', 'max:255', 'unique:product_attributes,code_name'],
            'product_attribute_category_id'  => ['required', 'numeric', 'exists:product_attribute_categories,id'],
            'description' => ['nullable', 'string', 'max:500']
        ]);
    }

}
