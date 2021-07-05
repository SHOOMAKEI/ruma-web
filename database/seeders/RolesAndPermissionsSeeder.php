<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
//        Permission::truncffate();

        foreach (config('auth.guards') as $guard=>$value) {
//            dd($guard);
            // create permissions
            Permission::findOrCreate('user.update',$guard);
            Permission::findOrCreate('user.delete',$guard);
            Permission::findOrCreate('user.read',$guard);
            Permission::findOrCreate('user.create',$guard);

            Permission::findOrCreate('company.update',$guard);
            Permission::findOrCreate('company.delete',$guard);
            Permission::findOrCreate('company.read',$guard);
            Permission::findOrCreate('company.create',$guard);

            Permission::findOrCreate('role.update',$guard);
            Permission::findOrCreate('role.delete',$guard);
            Permission::findOrCreate('role.read',$guard);
            Permission::findOrCreate('role.create',$guard);

            Permission::findOrCreate('permission.update',$guard);
            Permission::findOrCreate('permission.delete',$guard);
            Permission::findOrCreate('permission.read',$guard);
            Permission::findOrCreate('permission.create',$guard);

            Permission::findOrCreate('geopolitical_zone.update',$guard);
            Permission::findOrCreate('geopolitical_zone.delete',$guard);
            Permission::findOrCreate('geopolitical_zone.read',$guard);
            Permission::findOrCreate('geopolitical_zone.create',$guard);

            Permission::findOrCreate('region.update',$guard);
            Permission::findOrCreate('region.delete',$guard);
            Permission::findOrCreate('region.read',$guard);
            Permission::findOrCreate('region.create',$guard);

            Permission::findOrCreate('district.update',$guard);
            Permission::findOrCreate('district.delete',$guard);
            Permission::findOrCreate('district.read',$guard);
            Permission::findOrCreate('district.create',$guard);

            Permission::findOrCreate('shop.update',$guard);
            Permission::findOrCreate('shop.delete',$guard);
            Permission::findOrCreate('shop.read',$guard);
            Permission::findOrCreate('shop.create',$guard);

            Permission::findOrCreate('sale_zone.update',$guard);
            Permission::findOrCreate('sale_zone.delete',$guard);
            Permission::findOrCreate('sale_zone.read',$guard);
            Permission::findOrCreate('sale_zone.create',$guard);

            Permission::findOrCreate('country.update',$guard);
            Permission::findOrCreate('country.delete',$guard);
            Permission::findOrCreate('country.read',$guard);
            Permission::findOrCreate('country.create',$guard);

            Permission::findOrCreate('employee.update',$guard);
            Permission::findOrCreate('employee.delete',$guard);
            Permission::findOrCreate('employee.read',$guard);
            Permission::findOrCreate('employee.create',$guard);

            Role::findOrCreate('product-manager',$guard)->givePermissionTo('user.read');
            Role::findOrCreate('data-analyst',$guard)->givePermissionTo('user.read');
            Role::findOrCreate('sales-manager',$guard)->givePermissionTo('user.read');
            Role::findOrCreate('sales-representative',$guard)->givePermissionTo('user.read');
            Role::findOrCreate('supervisor',$guard)->givePermissionTo('user.read');
            Role::findOrCreate('system-administrator',$guard);
            Role::findOrCreate("mobile-app",$guard)->givePermissionTo("company.read");

        }
        $role_web = Role::findByName('system-administrator', 'web');
        $role_web->givePermissionTo(Permission::where('guard_name', 'web')->get());
        $role_sanctum = Role::findByName('system-administrator', 'sanctum');
        $role_sanctum->givePermissionTo(Permission::where('guard_name', 'sanctum')->get());

    }
}
