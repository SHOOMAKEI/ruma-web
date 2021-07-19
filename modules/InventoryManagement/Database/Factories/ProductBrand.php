<?php

namespace Modules\InventoryManagement\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductBrand extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \Modules\InventoryManagement\Repositories\Models\ProductBrand::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company,
            'code_name' => $this->faker->companySuffix,
            'description' => $this->faker->text(300)
        ];
    }
}
