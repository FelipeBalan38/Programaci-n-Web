<?php
use App\Http\Controllers\API\AvisoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route::prefix('avisos')->group(function () {
    Route::get('/',[ AvisoController::class, 'getAll']);
    Route::post('/',[ AvisoController::class, 'create']);
    Route::delete('/{id}',[ AvisoController::class, 'delete']);
    Route::get('/{id}',[ AvisoController::class, 'get']);
    Route::put('/{id}',[ AvisoController::class, 'update']);
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
