<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');
Route::get('/shop', function () {
    return Inertia::render('Shop');
})->name('shop');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
