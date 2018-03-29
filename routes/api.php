<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

/*Route::middleware('jwt.auth')->get('/users', function (Request $request) {
    return $request->user();
});*/

Route::get('/user', function(){

	$token = JWTAuth::getToken();

	$user = JWTAuth::toUser($token);
	return $user;

})->middleware('jwt.auth');

 
//User Authentication Route Group

Route::group(['name'=>'authenticate'], function () {

// User Authentication

Route::post('/authenticate', 'ApiAuthController@authenticate');

// Forgot Password Route

Route::post('/forgotpassword', 'ApiAuthController@ForgotPassword'); 

// Reset Password Route

<<<<<<< HEAD
Route::get('/resetpassword/{token}',['uses' =>'ApiAuthController@ResetPassword']); 
=======
Route::get('/resetpassword/{token}','ApiAuthController@ResetPassword'); 
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9

// Change Password Route

Route::post('/changepassword','ApiAuthController@ChangePassword'); 

});

// Builder Route Group

Route::group(['name'=>'Builder'], function () {

Route::post('/createpartnership','BuilderPartnership@CreatePartnership'); 

});


//Admin Route Group

Route::group(['name'=>'Admin'], function () {
  
  // User Registration Route

  Route::post('/register','CreateUserController@registration'); 

});