<?php

namespace Modules\InventoryManagement\Repositories\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductVendor extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \Modules\InventoryManagement\Repositories\Models\ProductVendor::class;

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
