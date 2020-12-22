<?php

use App\Http\Controllers\API\BooksAPIController;
use App\Http\Controllers\API\FavouritesAPIController;
use Illuminate\Support\Facades\Route;

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

Route::group([
    'prefix' => 'google-books'
], function() {
    Route::get('/', [BooksAPIController::class, 'index'])
        ->name('gb-index');
    Route::get('/{id}', [BooksAPIController::class, 'show'])
        ->name('gb-show');
});

Route::group([
    'prefix' => 'favourite-books'
], function() {
    Route::get('/', [FavouritesAPIController::class, 'index'])
        ->name('fb-index');
    Route::get('/{id}', [FavouritesAPIController::class, 'show'])
        ->name('fb-index');
    Route::post('/', [FavouritesAPIController::class, 'store'])
        ->name('fb-store');
    Route::delete('/{bookId}', [FavouritesAPIController::class, 'destroy'])
        ->name('fb-destroy');
});
