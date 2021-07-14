<?php

namespace Modules\StoreManagement\Database\Factories;

use Modules\StoreManagement\Models\SaleZone;
use Illuminate\Database\Eloquent\Factories\Factory;

class SaleZoneFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = SaleZone::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->city,
            'code_name' => $this->faker->citySuffix,
        ];
    }
}
