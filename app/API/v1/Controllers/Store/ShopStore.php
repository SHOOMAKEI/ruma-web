<?php

namespace App\API\v1\Controllers\Store;

use App\API\v1\Controllers\APIBase;
use App\Http\Controllers\Controller;
use App\Models\API\v1\ShopProductItemAttributePhone;
use Illuminate\Http\Request;
use Modules\StoreManagement\Models\ShopStockProductItem;
use Modules\StoreManagement\Models\ShopStockProductItemCode;

class ShopStore extends APIBase
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function searchProduct(Request $request) : \Illuminate\Http\JsonResponse {
        $validation = $request->validate(['device_token'=>"required|string",
            'shop_id'=>"required|numeric",
            'item_code'=>"required|string"]);
        //$productCode =  ShopStockProductItemCode::where('value',$validation['item_code'])->first();
        //$shopProduct = ShopStockProductItem::where('id',$productCode->shop_stock_product_item_id)->first();
        $shopProduct['itemCode'] = $validation['item_code'];
        $shopProduct['photoUrl'] =  'https://picsum.photos/id/237/200/300';
        $shopProduct['skuID'] = "12312331";
        $shopProduct['itemName'] = "XIAOMI 13";
        $shopProduct['itemAttributes'] = new ShopProductItemAttributePhone(
            "4g","ANDROID X"    ,"xiamO redmi",'XIAOMI',"JULLY 2020","ANDROID",
            "4GB 32GB STORATE",'13mp','8MP','LOUDSPEAKER',"1010010",'1123'
        );
        $shopProduct['itemStatus'] = "available";
        $shopProduct['itemPrice'] = 2000.00;


      return $this->success(array('productDetail'=>$shopProduct,'productStatus'=>"found"),"Product Found",200);
    }
}
