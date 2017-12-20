<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class userController extends Controller
{

    public function authenticate(Request $request){

        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials']);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token']);
        }

        // all good so return the token
        return response()->json(compact('token'));
    }

    public function getAuthUser(Request $request){
        $user = JWTAuth::toUser($request->token);
        return response()->json(['result' => $user]);
    }

    public function createUser(Request $request){

      $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users|max:255',
        'password' => 'required|max:255',
      ]);
      if($validator->fails()){
        return response()->json(["status"=>false,"errors"=>$validator->errors(),"message"=>"Oops! Something went wrong!"]);
      }
      $data = $request->all();
      $data['password'] = bcrypt($request->input('password'));
      $user = User::create($data);
      if($user){
        return response()->json(["status"=>true]);
      }
      else{
        return response()->json(["status"=>false,"message"=>"Internal error occurred"]);
      }
    }
}
