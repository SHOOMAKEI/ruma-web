<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class VerifyAPIKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $api_keys = array('44b48f2305bf2680', 'a40d97bfc2ab0e56');
        if($request->header('Authorization')){
            $api_key = $request->header('Authorization');

            if(in_array($api_key,$api_keys)){
                return $next($request);
            }else{
                return response()->json(["success"=>false,"message"=>"Authorization Token Invalid"]);
            }
        }
        return $next($request);
    }
}
