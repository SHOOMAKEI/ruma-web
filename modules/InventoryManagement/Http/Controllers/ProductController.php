<?php

namespace Modules\InventoryManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\InventoryManagement\Models\ProductBrand;
use Modules\InventoryManagement\Models\Product;
use Modules\InventoryManagement\Models\ProductOption;
use Modules\InventoryManagement\Models\ProductOptionValue;
use Modules\InventoryManagement\Models\ProductSKU;
use Modules\InventoryManagement\Models\ProductSKUValue;
use Modules\InventoryManagement\Models\ProductType;
use Modules\InventoryManagement\Models\ProductVendor;

class ProductController extends Controller
{
    public function index()
    {
        return inertia('Module/InventoryManagement/Product/Index', ['products' => Product::all()]);
    }

    public function create()
    {
        return inertia('Module/InventoryManagement/Product/Create',[
            'brands' => ProductBrand::all(),
            'vendors' => ProductVendor::all(),
            'product_types' => ProductType::all()
        ]);
    }


    public function store(Request $request, $product_option)
    {
        $this->validateRequest($request);

        $product = Product::create($request->only(['name', 'description', 'product_brand_id', 'product_type_id']));

        $this->saveProductOtherProperties($product, $request);

        return redirect()->route('product-attribute_categories.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        return view('inventory-management::show');
    }


    public function edit(Product $product)
    {
        return inertia('Module/InventoryManagement/Product/Edit',[
            'product'=> $product,
            'brands' => ProductBrand::all(),
            'vendors' => ProductVendor::all(),
            'product_types' => ProductType::all()
        ]);
    }


    public function update(Request $request, Product $product)
    {
        $this->validateRequest($request);

        $product->update($request->only(['name', 'description', 'product_brand_id', 'product_type_id']));

        $product->vendors()->sync($request['product_vendor_id']);

        $this->saveProductOtherProperties($product, $request);

        return redirect()->route('products.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(Product $product)
    {
        if(!is_null($product->id)) {

            $product->delete();
        }

        return redirect()->route('products.index')->with(['status' => 'Operation Complete successful']);
    }

    private function validateRequest(Request $request)
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'sku_name' => ['required_if:has_variants,false', 'string', 'max:255'],
            'barcode' => ['nullable', 'string', 'max:255'],
            'product_type_id'  => ['required', 'numeric', 'exists:product_types,id'],
            'product_brand_id'  => ['required', 'numeric', 'exists:product_brands,id'],
            'product_vendor_id'  => ['required', 'numeric', 'exists:product_vendors,id'],
            'product_variants.*.option.id' => ['required_if:has_variants,true', 'numeric', 'exists:product_attributes,id'],
            'product_variants.*.option.name' => ['required_if:has_variants,true', 'string', 'max:255'],
            'product_variants.*.option.create_variance' => ['required_if:has_variants,true', 'boolean'],
            'product_variants.*.option.values.*.name' => ['required_if:has_variants,true', 'string', 'max:255'],
            'product_variants.*.variants.sku_name' => ['required_if:has_variants,true', 'string', 'max:255'],
            'product_variants.*.variants.barcode' => ['nullable', 'string', 'max:255'],
            'has_variants' => ['required', 'boolean'],
            'photo' => ['nullable', 'base64Image'],
            'description' => ['nullable', 'string', 'max:500']
        ]);
    }

    public function saveProductOtherProperties(Product $product, Request $request)
    {
        $product->vendors()->sync($request['product_vendor_id']);

        foreach ($request['product_variants'] as $variant_key => $variant_value)
        {

            $product_option[$variant_key] =  ProductOption::updateOrCreate([
                'name' => $variant_value['option']['name'],
                'product_id' => $product->id,
                'product_attribute_id' => $variant_value['option']['id'],
            ],[ 'create_variance' => $variant_value['option']['create_variance']]);

            foreach ($variant_value['option']['values'] as $value_key => $value)
            {
                ProductOptionValue::updateOrCreate([
                    'product_option_id' => $product_option[$variant_key]->id
                ],['name' => $value['name']]);
            }

            foreach ($variant_value['variants'] as $key => $variant)
            {
                $sku[$key] = ProductSKU::updateOrCreate([
                    'name' => $variant['sku_name'],
                    'product_id' => $product->id
                ],['barcode' => $variant['barcode']]);

                $product_option_data = ProductOption::where([
                    'product_id' => $product->id,
                    'id' => $product_option[$variant_key]->id,
                    'create_variance' => true])->with('product_option_values')->get();

                if(!$product_option_data->isEmpty()) {

                    foreach ($product_option_data as $variant_options)
                    {
                        foreach ($variant_options->product_option_values as $value)
                        {
                            ProductSKUValue::updateOrCreate([
                                'product_s_k_u_id' => $sku[$key]->id,
                                'product_option_id' => $product_option_data->id,
                            ],['product_option_value_id' => $value->id]);
                        }

                    }

                }

            }
        }

        if(!empty($request['photo'])){
            uploadBase64Image($product, 'product-photo', $request['photo'], false);
        }
    }

}
