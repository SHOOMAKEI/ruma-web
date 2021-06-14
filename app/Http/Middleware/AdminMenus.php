<?php

namespace App\Http\Middleware;

use App\Events\CreateSidebarMenus;
use Closure;
use Illuminate\Http\Request;

class AdminMenus
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
        // Check if logged in
        if (!auth()->check()) {
            return $next($request);
        }

        event(new CreateSidebarMenus(mainMenu()));


        return $next($request);
    }
}
