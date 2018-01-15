<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\employee;

class employeeController extends Controller
{
    public function index(Request $request){
    	$employeeData = employee::get()->toArray();
    	return response()->json($employeeData);
    }

    public function delete(Request $request){
    	$employeeData = employee::where(["id"=>$request->input('id')])->delete();
    	return response()->json(["status"=>true]);
    }
}
