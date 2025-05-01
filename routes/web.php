<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::get('/shop', function () {
    return Inertia::render('Shop');
})->name('shop');
Route::get('/login', function () {
    return Inertia::render('LoginCustomer');
})->name('login');
Route::get('/forgot-password', function () {
    return Inertia::render('forgotPassword');
})->name('forgot-password');
Route::get('/register', function () {
    return Inertia::render('registerCustomer');
})->name('register');
Route::get('/password-reset', function () {
    return Inertia::render('passwordReset');
})->name('password-reset');

