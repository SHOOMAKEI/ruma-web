<?php

namespace App\API\v1\Controllers\User;

use App\API\v1\Controllers\APIBase;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AppUser extends APIBase
{
    public function show(){
        $response = [
            "success"=>true,
            'message'=>"welcome User",
        ];
        return response()->json($response,200);
    }

    public function myCompanyList(){
        $response = [
            "success"=>true,
            'message'=>"welcome to api controller version 1",
            'data'=>array("1"=>"ruma com",'2'=>"Ya Feng")
        ];
        return response()->json($response,200);
    }

    public function UserProfile(){
        $response = [
            "success"=>true,
            'message'=>"welcome to api controller version 1",
            'data'=>array("1"=>"ruma com",'2'=>"Ya Feng")
        ];
        return response()->json($response,200);
    }

    public function getUserInfo($id){
        return array("id"=>1,'name'=>"ombeni");
    }
}
