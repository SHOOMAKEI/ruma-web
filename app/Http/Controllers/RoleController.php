<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{

    public function index()
    {
        return inertia('Role/Index', ['roles' => Role::all('id', 'name')]);
    }


    public function create()
    {
        return inertia('Role/Create', ['permissions' => Permission::all()->map(function ($permission){
            $data['id'] =  $permission->id;
            $data['name'] =  $permission->name;
            $data['checked'] =  false;

            return $data;
        })]);
    }


    public function store(Request $request)
    {
        $validator =  Validator::make($request->toArray(),[
            'name' => ['required','string', 'max:255'],
            'permissions.*.id' => ['required','numeric', 'exists:permissions,id'],
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }
////        dd(config('auth.guards'));
//        foreach (config('auth.guards') as $guard=>$value)
//        {
//            $role = Role::create([
//                'name' => $request['name'],
//                'guard_name' => $guard
//            ]);
//
//            $permissions = array_filter($request['permissions'], function($permission) {
//                return $permission['checked'] == true;
//            } );
//
//            $role->syncPermissions($permissions, $guard);
//        }


        return redirect()->route('roles.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show(Role $role)
    {
        return inertia('Role/Show', [ 'role' => $role]);
    }


    public function edit(Role $role)
    {
        $role_data['id'] = $role->id;
        $role_data['name'] = $role->name;
        $role_data['permissions'] = $role->permissions->map(function ($permission){
            $data['id'] =  $permission->id;
            $data['name'] =  $permission->name;
            $data['checked'] =  true;
            return $data;
        });
        return inertia('Role/Edit', ['permissions' => Permission::all('id', 'name')->map(function ($permission) use($role){
            $data['id'] =  $permission->id;
            $data['name'] =  $permission->name;
            $data['checked'] = $role->hasPermissionTo($permission->name);
            return $data;
        }), 'role' => $role_data]);
    }


    public function update(Request $request, Role $role)
    {
        $validator =  Validator::make($request->toArray(),[
            'name' => ['required','string', 'max:255'],
            'permissions.*.id' => ['required','numeric', 'exists:permissions,id'],
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        $role->update([
            'name' => $request['name']
        ]);

        $role->syncPermissions($request['permissions']);

        return redirect()->route('roles.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(Role $role)
    {
        if(!is_null($role)) {
            $role->delete();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
