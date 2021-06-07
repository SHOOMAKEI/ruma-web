<?php

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

Route::get('/home', function() {
    return inertia('Dashboard');
})->name('home');

Route::get('my-profile', function () {
    return inertia('Profile/Index', ['user', \App\Models\User::find(auth()->user()->id)]);
})->name('profile');
