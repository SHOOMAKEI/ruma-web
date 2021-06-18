<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\EmployeeManagement\Http\Middleware\HandleInertiaRequests;

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
Route::prefix('employee-management')
    ->middleware(['web', 'auth','auth:sanctum'])
    ->namespace('Modules\EmployeeManagement\Http\Controllers')
    ->group(function () {
        Route::resource('contract-definitions', 'ContractsDefinitionController');
        Route::resource('leave-groups', 'LeaveGroupController');
        Route::resource('employees', 'EmployeeController');
    });

