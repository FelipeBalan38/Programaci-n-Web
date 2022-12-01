<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\PagoController;

Route::prefix('pago')->group(function () {
    Route::get('/',[ PagoController::class, 'getAll']);
    Route::post('/',[ PagoController::class, 'create']);
    Route::delete('/{id}',[ PagoController::class, 'delete']);
    Route::get('/{id}',[ PagoController::class, 'get']);
    Route::put('/{id}',[ PagoController::class, 'update']);
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
