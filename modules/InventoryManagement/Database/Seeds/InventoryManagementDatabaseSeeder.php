<?php

namespace Modules\InventoryManagement\Database\Seeds;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Modules\InventoryManagement\Database\Seeds\ProductAttributeSeeder;

class InventoryManagementDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

         $this->call(ProductAttributeSeeder::class);

        Model::reguard();
    }
}
