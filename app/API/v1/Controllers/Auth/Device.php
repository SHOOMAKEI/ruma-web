<?php

namespace App\API\v1\Controllers\Auth;

use App\API\v1\Controllers\APIBase;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Device extends APIBase
{
    public function deviceRegister(Request $request){
        print_r($request->json());
        die();
    }
}
