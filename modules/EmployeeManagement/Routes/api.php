<?php

use Illuminate\Http\Request;
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

Route::middleware([HandleInertiaRequests::class, 'web'])->get('/employee-management', function (Request $request) {
    return inertia('Module/EmployeeManagement/Dashboard');
});
