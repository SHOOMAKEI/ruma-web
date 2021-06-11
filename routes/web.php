<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\OperationYearController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('Auth/Login');
});


Route::middleware([ 'auth','auth:sanctum'])
    ->group(function () {
        Route::get('/home', function () {
            return inertia('Dashboard');
        })->name('home');

        Route::get('my-profile', [SettingsController::class, 'index'])->name('profile');
        Route::post('settings/update-account-information', [SettingsController::class, 'updateAccountInfo'])
            ->name('settings.updateAccountInfo');
        Route::post('settings/update-password', [SettingsController::class, 'updatePassword'])
            ->name('settings.updatePassword');
        Route::get('settings/toggle_otp', [SettingsController::class, 'toggleOTP'])
            ->name('settings.toggleOTP');
        Route::get('settings/toggle_2fa', [SettingsController::class, 'toggle2FA'])
            ->name('settings.toggle2fa');
        Route::get('settings/generate_recovery_code', [SettingsController::class, 'generateRecoveryCodes'])
            ->name('settings.recovery_code');
        Route::post('settings/logout_other_sessions_browser', [SettingsController::class, 'sessionsBrowser'])
            ->name('settings.sessions_browser');
    });


Route::middleware([ 'auth','auth:sanctum', 'role:system-administrator'])
    ->group(function () {
        Route::resource('companies', CompanyController::class);
        Route::resource('users', AccountController::class);
        Route::resource('departments', DepartmentController::class);
        Route::resource('roles', RoleController::class);
        Route::resource('operation-years', OperationYearController::class);

        Route::get('departments/{company}/company', [DepartmentController::class, 'index'])
            ->name('departments.index');
        Route::get('departments/{department}/edit', [DepartmentController::class, 'edit'])
            ->name('departments.edit');
        Route::get('departments/create', [DepartmentController::class, 'create'])
            ->name('departments.create');
        Route::post('departments/store', [DepartmentController::class, 'store'])
            ->name('departments.store');
        Route::put('departments/{department}/update', [DepartmentController::class, 'update'])
            ->name('departments.update');
        Route::get('departments/{department}/child-departments', [DepartmentController::class, 'child_departments'])
            ->name('departments.child_department');
        Route::delete('departments/{department}/delete', [DepartmentController::class, 'destroy'])
            ->name('departments.delete');
    });

Route::middleware([ 'auth','auth:sanctum'])
    ->group(function () {
        Route::get('{company}/dashboard', [CompanyController::class, 'defaultCompany'])
            ->name('company.default_dashboard');

    });
