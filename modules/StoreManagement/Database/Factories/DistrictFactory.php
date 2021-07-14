<?php

namespace Modules\StoreManagement\Database\Factories;

use Modules\StoreManagement\Models\District;
use Modules\StoreManagement\Models\Region;
use Illuminate\Database\Eloquent\Factories\Factory;

class DistrictFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = District::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'region_id' =>(Region::inRandomOrder()
                            ->limit(1)
                            ->get())[0]->id,
            'name' => $this->faker->city,
            'code_name' => $this->faker->citySuffix,
        ];
    }
}
