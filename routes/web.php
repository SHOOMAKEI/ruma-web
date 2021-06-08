<?php

use App\Http\Controllers\CompanyController;
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

    });
