<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Models\ProductBrand;
use Modules\InventoryManagement\Models\ProductAttributeCategory;

class ProductAttributeCategoryController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/ProductAttributeCategory/Index');
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/ProductAttributeCategory/Create');
    }


    public function store(Request $request)
    {
        $this->validateRequest($request);

        ProductAttributeCategory::create($request->only(['name','code_name', 'description']));

        return redirect()->route('product-attribute-categories.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(ProductAttributeCategory $product_attribute_category)
    {
        return inertia('Module/InventoryManagement/ProductAttributeCategory/Edit',['product_attribute_category'=> $product_attribute_category]);
    }


    public function update(Request $request, ProductAttributeCategory $product_attribute_category)
    {
        $this->validateRequest($request);

        $product_attribute_category->update($request->only(['name', 'code_name','description']));

        return redirect()->route('product-attribute-categories.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(ProductAttributeCategory $product_attribute_category)
    {
        if(!is_null($product_attribute_category->id)) {

            $product_attribute_category->delete();
        }

        return redirect()->route('product-attribute-categories.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code_name' => ['required', 'string', 'max:255', 'unique:product_attribute_categories,code_name'],
            'description' => ['nullable', 'string', 'max:500']
        ]);
    }

}
