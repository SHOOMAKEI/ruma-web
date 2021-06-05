<?php

namespace Database\Factories;

use App\Models\Region\District;
use App\Models\Region\Shop;
use Illuminate\Database\Eloquent\Factories\Factory;

class ShopFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Shop::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'district_id' =>District::factory(),
            'name' => $this->faker->name,
            'address' => $this->faker->address,
            'location' => $this->faker->city,
            'email' => $this->faker->safeEmail,
            'phone' => $this->faker->e164PhoneNumber,
            'longitude' => $this->faker->longitude,
            'latitude' => $this->faker->latitude,
            'code_name' => $this->faker->citySuffix,
        ];
    }
}
