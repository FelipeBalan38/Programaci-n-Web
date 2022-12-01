<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\PagoController;
use App\Http\Controllers\API\AvisoController;
use App\Http\Controllers\API\QuejaController;

Route::prefix('avisos')->group(function () {
    Route::get('/',[ AvisoController::class, 'getAll']);
    Route::post('/',[ AvisoController::class, 'create']);
    Route::delete('/{id}',[ AvisoController::class, 'delete']);
    Route::get('/{id}',[ AvisoController::class, 'get']);
    Route::put('/{id}',[ AvisoController::class, 'update']);
});


Route::prefix('pago')->group(function () {
    Route::get('/',[ PagoController::class, 'getAll']);
    Route::post('/',[ PagoController::class, 'create']);
    Route::delete('/{id}',[ PagoController::class, 'delete']);
    Route::get('/{id}',[ PagoController::class, 'get']);
    Route::put('/{id}',[ PagoController::class, 'update']);
});




Route::prefix('queja')->group(function () {
    Route::get('/',[ QuejaController::class, 'getAll']);
    Route::post('/',[ QuejaController::class, 'create']);
    Route::delete('/{id}',[ QuejaController::class, 'delete']);
    Route::get('/{id}',[ QuejaController::class, 'get']);
    Route::put('/{id}',[ QuejaController::class, 'update']);
});
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
