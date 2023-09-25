<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about.html', function () {
    return view('about');
});
Route::get('/dashboard.html', function () {
    return view('dashboard');
});

Route::get('/dashboard/profile.html', function () {
    return view('dashboard.profile');
});
Route::get('/dashboard/settings.html', function () {
    return view('dashboard.settings');
});
Route::get('/dashboard/order.html', function () {
    return view('dashboard.order');
});

