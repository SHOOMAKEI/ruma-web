<?php

namespace App\Http\Middleware;

use App\Models\User;
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
        return array_merge(parent::share($request), [
            'status' => session('status'),
            'auth.user' => isset($user)?function () use ($user) {
                $data['id'] = $user->id;
                $data['username'] = $user->username;
                $data['email'] = $user->email;
                $data['profile_photo_path'] = $user->profile_photo_path;
                $data['settings']['has_enabled_otp'] = $user->enabled_otp;
                $data['settings']['has_enable_two_factory_auth'] = $user->two_factor_recovery_codes != null;
                $data['settings']['roles'] = $user->roles;
                $data['settings']['permissions'] = $user->permissions;
                return $data;
            }:null,
            'roles' => function (Request $request) {
                return $request->user()
                    ? User::find(auth()->user()->id)->roles->only('id', 'name')
                    : null; },
            'permissions' => function (Request $request) {
                return $request->user()
                    ? User::find(auth()->user()->id)->permissions->only('id', 'name')
                    : null; },
        ]);
    }
}
