<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("createUser","userController@createUser");
Route::post("authenticate","userController@authenticate");

Route::group(['middleware'=>'jwt-auth'], function(){
	Route::post("getEmployeeData","employeeController@index");
	Route::post("deleteEmployeeData","employeeController@delete");
	Route::get("checkAuth",function(){
		return response()->json(["status"=>true]);
	});
});
