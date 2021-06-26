<?php

namespace Modules\StoreManagement\Database\Seeds;

use Modules\StoreManagement\Database\Seeds\CountrySeeder;
use Modules\StoreManagement\Database\Seeds\GeopoliticalZoneSeeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Modules\StoreManagement\Models\District;
use Modules\StoreManagement\Models\SaleZone;
use Modules\StoreManagement\Models\Shop;

class StoreManagementDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

         $this->call(CountrySeeder::class);
         $this->call(GeopoliticalZoneSeeder::class);

         Shop::factory(50)->create();
         SaleZone::factory(2)->hasAttached(District::factory()->count(3))->create();
         SaleZone::factory(2)->hasAttached(Shop::factory()->count(3))->create();


        Model::reguard();
    }
}
