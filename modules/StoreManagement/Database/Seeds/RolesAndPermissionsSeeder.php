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

        // create permissions
        Permission::findOrCreate('user.update');
        Permission::findOrCreate('user.delete');
        Permission::findOrCreate('user.read');
        Permission::findOrCreate('user.create');

        Permission::findOrCreate('company.update');
        Permission::findOrCreate('company.delete');
        Permission::findOrCreate('company.read');
        Permission::findOrCreate('company.create');

        Permission::findOrCreate('role.update');
        Permission::findOrCreate('role.delete');
        Permission::findOrCreate('role.read');
        Permission::findOrCreate('role.create');

        Permission::findOrCreate('permission.update');
        Permission::findOrCreate('permission.delete');
        Permission::findOrCreate('permission.read');
        Permission::findOrCreate('permission.create');

        Permission::findOrCreate('geopolitical_zone.update');
        Permission::findOrCreate('geopolitical_zone.delete');
        Permission::findOrCreate('geopolitical_zone.read');
        Permission::findOrCreate('geopolitical_zone.create');

        Permission::findOrCreate('region.update');
        Permission::findOrCreate('region.delete');
        Permission::findOrCreate('region.read');
        Permission::findOrCreate('region.create');

        Permission::findOrCreate('district.update');
        Permission::findOrCreate('district.delete');
        Permission::findOrCreate('district.read');
        Permission::findOrCreate('district.create');

        Permission::findOrCreate('shop.update');
        Permission::findOrCreate('shop.delete');
        Permission::findOrCreate('shop.read');
        Permission::findOrCreate('shop.create');

        Permission::findOrCreate('sale_zone.update');
        Permission::findOrCreate('sale_zone.delete');
        Permission::findOrCreate('sale_zone.read');
        Permission::findOrCreate('sale_zone.create');

        Permission::findOrCreate('country.update');
        Permission::findOrCreate('country.delete');
        Permission::findOrCreate('country.read');
        Permission::findOrCreate('country.create');

        Permission::findOrCreate('employee.update');
        Permission::findOrCreate('employee.delete');
        Permission::findOrCreate('employee.read');
        Permission::findOrCreate('employee.create');

        Role::findOrCreate('product-manager')->givePermissionTo('user.read');
        Role::findOrCreate('data-analyst')->givePermissionTo('user.read');
        Role::findOrCreate('sales-manager')->givePermissionTo('user.read');
        Role::findOrCreate('sales-representative')->givePermissionTo('user.read');
        Role::findOrCreate('supervisor')->givePermissionTo('user.read');
        Role::findOrCreate('system-administrator')->givePermissionTo(Permission::all());
    }
}
