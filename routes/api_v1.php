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
    $api->group(["as"=>"api","namespace"=>"App\API\\v1\Controllers"],function($api){
        // Current User Data Listing
        $api->get("/user/companies","User\AppUser@getUserCompanies");
        $api->get("/user/dashboard","User\AppUserDashboard@getDashboard");
        $api->get("/user/profile","User\AppUser@getProfileInfo");
        //
        $api->get("/store/promoterProducts","Store\Promoter@");
        $api->resource("/store","Store\Shop");
        $api->get("/product/{productID}","Product\StoreProduct@index");
        $api->put("/product/checkout/{productID}","Product\StoreProduct@Checkout");
        $api->put("/product/verify/{productID}","Product\StoreProduct@Verification");
        $api->put("/product/checkout/{productID}","Product\StoreProduct@Checkout");

        // Attendance tracking from mobile
        $api->put("/attendance/checking/in","Attendance\PromoterAttendance@checkIn");
        $api->put("/attendance/checking/out","Attendance\PromoterAttendance@checkOut");
        $api->get("/attendance/list","Attendance\PromoterAttendance@attendanceList");
        $api->put("/attendance/UserTelemetry","Attendance/PromoterAttendance@deviceTelemetry");

        // Facial Recognition tracking and updating

    });

});
