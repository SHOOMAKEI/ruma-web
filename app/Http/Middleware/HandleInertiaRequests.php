<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Utilities\Sidebar;
use Illuminate\Http\Request;
use Inertia\Middleware;
use MongoDB\Driver\Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
//        dd(mainMenu()->all());
        $user = null;
        $request->user()
            ? $user = User::find(auth()->user()->id): null;
 ;
        return array_merge(parent::share($request), [
            'status' => session('status'),
            'auth.user' => isset($user)?function () use ($user) {
                $data['id'] = $user->id;
                $data['username'] = $user->username;
                $data['email'] = $user->email;
                $data['profile_photo_path'] = $user->profile_photo_path;
                $data['settings']['has_enable_otp'] = $user->has_enable_otp;
                $data['settings']['has_enable_two_factory_auth'] = $user->two_factor_recovery_codes != null;
                $data['settings']['roles'] = $user->roles;
                $data['settings']['permissions'] = $user->permissions;
                return $data;
            }:null,
            'auth.roles' => isset($user)? function () use ($user) {
                return $user->roles->map(function($role){
                    $data['id'] = $role->id;
                    $data['name'] = $role->name;

                    return $data;
                });
                     } : null,
            'auth.permissions' => isset($user)? function () use ($user) {
                 $user->permissions->map(function($permission){
                    $data['id'] = $permission->id;
                    $data['name'] = $permission->name;

                    return $data;
                 });
                }: null,
            'auth.companies' => isset($user)?
                $user->companies->map(function($company){
                    $data['id'] = $company->id;
                    $data['name'] = $company->name;

                    return $data;
                })
                     : null,
            'auth.current_company' => isset($user)? function () use ($user) {
                return $user->current_company()?->name;
            } : null,
            'main_menu' => mainMenu()->all()
        ]);
    }
}
