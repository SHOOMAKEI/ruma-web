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
        Route::post('employees-personal-info/{employee}', 'EmployeeController@personalInformation')
            ->name('employee.personal_info');
        Route::post('employees-profile-photo/{employee}', 'EmployeeController@profilePhoto')
            ->name('employee.profile_photo');
        Route::post('employees-contact-info/{employee}', 'EmployeeController@contactInformation')
            ->name('employee.contact_info');
        Route::post('employees-address-info/{employee}', 'EmployeeController@addressInformation')
            ->name('employee.address_info');
        Route::post('employees-other-info/{employee}', 'EmployeeController@otherInformation')
            ->name('employee.other_info');
        Route::post('employees-companies-info/{employee}', 'EmployeeController@companiesInformation')
            ->name('employee.companies_info');
        Route::post('employees-contract-info/{employee}', 'EmployeeController@contractInformation')
            ->name('employee.contract_info');
        Route::post('employees-add-contract-info/{employee}', 'EmployeeController@addContractInformation')
            ->name('employee.add_contract_info');
        Route::post('employees-roles-info/{employee}', 'EmployeeController@rolesInformation')
            ->name('employee.role_info');
        Route::post('employees-permissions-info/{employee}', 'EmployeeController@permissionsInformation')
            ->name('employee.permission_info');
    });

