<?php

use App\API\v1\Controllers\Auth\AuthMobile;

use App\API\v1\Controllers\User\AppUser;

use Illuminate\Http\Response;

use Illuminate\Support\Facades\Route;


$api = app('Dingo\Api\Routing\Router');

$api->version("v1",function($api){
    $api->post("/auth/login",[AuthMobile::class,'login']);
    $api->post("/auth/verifyOTPCode",[AuthMobile::class,'verifyOTPCode']);
    $api->post("/auth/register",[AuthMobile::class,'deviceRegister']);
    $api->post("/auth/forgotPassword",[AuthMobile::class,'forgotPassword']);
    $api->post("/auth/forgotPasswordCodeChallenge",[AuthMobile::class,'forgotPasswordCodeChallenge']);
    $api->post("/auth/updateUserPassword",[AuthMobile::class,'updateUserPassword']);
});


$api->version("v1",['middleware'=>"api"],function($api){

    $api->group(["as"=>"api","namespace"=>"\App\API\\v1\Controllers"],function($api){

        // Current User Data Listing
        $api->get("/user/companies","User\AppUser@getUserCompanies");
        $api->get("/user/dashboard","User\AppUserDashboard@getDashboard");
        $api->get("/user/profile","User\AppUser@getProfileInfo");

        // App Store Information information
        $api->post("/store/product/verify","\App\API\\v1\Controllers\Store\ShopStore@searchProduct");
        $api->post('/store/createSalesCart',"\App\API\\v1\Controllers\Store\StorePromoterCart@store");

        // Facial Recognition tracking and updating
    });
});
