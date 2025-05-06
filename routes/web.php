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
Route::get('/cart', function () {
    return Inertia::render('cart');
})->name('cart');
Route::get('/checkout', function () {
    return Inertia::render('checkout');
})->name('/checkout');
Route::get('/confirmation', function () {
    return Inertia::render('confirmation');
})->name('/confirmation');
Route::get('/track', function () {
    return Inertia::render('tracking');
})->name('/track');
Route::get('/profile', function () {
    return Inertia::render('profile');
})->name('/profile');
Route::get('/history', function () {
    return Inertia::render('orderHistory');
})->name('/history');
Route::get('/terms', function () {
    return Inertia::render('terms');
})->name('/terms');