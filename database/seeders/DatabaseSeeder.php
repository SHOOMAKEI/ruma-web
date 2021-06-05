<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Region\District;
use App\Models\Region\GeopoliticalZone;
use App\Models\Region\SaleZone;
use App\Models\Region\Shop;
use Database\Factories\DistrictFactory;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call(CountrySeeder::class);
        $this->call(RolesAndPermissionsSeeder::class);
        $this->call(GeopoliticalZoneSeeder::class);

        Shop::factory(50)->create();
        SaleZone::factory(2)->hasAttached(District::factory()->count(3))->create();
        SaleZone::factory(2)->hasAttached(Shop::factory()->count(3))->create();

        $users1 = User::factory(10)
            ->hasAttached(Company::factory()->count(4), ['user_type' => 'sales-representative'])
            ->hasAttached(Shop::factory()->count(4), ['is_current' => true])
            ->create();

        foreach ($users1 as $user)
        {
            $user->assignRole($user->employee->position);
        }

        $users2 = User::factory(10)
            ->hasAttached(Company::factory()->count(4), ['user_type' => 'sales-representative'])
            ->hasAttached(District::factory()->count(4), ['is_current' => true])
            ->create();

        foreach ($users2 as $user)
        {
            $user->assignRole($user->employee->position);
        }

        $users3 = User::factory(10)
            ->hasAttached(Company::factory()->count(4), ['user_type' => 'sales-representative'])
            ->hasAttached(SaleZone::factory()->count(4), ['is_current' => true])
            ->create();

        foreach ($users3 as $user)
        {
            $user->assignRole($user->employee->position);
        }

    }
}
