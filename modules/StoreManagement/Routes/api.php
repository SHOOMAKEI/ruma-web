<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('store-management')
    ->middleware(['web', 'auth','auth:sanctum'])
    ->namespace('Modules\StoreManagement\Http\Controllers')
    ->group(function () {
        Route::resource('geopolitical-zones', 'GeopoliticalZoneController');
        Route::resource('regions', 'RegionController');
        Route::resource('districts', 'DistrictController');
        Route::resource('shops', 'ShopController');
        Route::resource('sale-zones', 'SaleZoneController');

    });
