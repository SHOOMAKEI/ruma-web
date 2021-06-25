<?php

namespace Database\Factories;


use App\Models\Region\GeopoliticalZone;
use Illuminate\Database\Eloquent\Factories\Factory;

class GeopoliticalZoneFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = GeopoliticalZone::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // 'name' => $this->faker->unique()->randomElement([])
        ];
    }
}
