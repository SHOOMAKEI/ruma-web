<?php

use App\API\v1\Controllers\Auth\AuthMobile;
use App\API\v1\Controllers\User\AppUser;
use Illuminate\Support\Facades\Route;

$api = app('Dingo\Api\Routing\Router');
$api->version("v1",function($api){
    $api->post("/auth/login",[AuthMobile::class,'login']);
    $api->post("/auth/register",[AuthMobile::class,'deviceRegister']);
});
