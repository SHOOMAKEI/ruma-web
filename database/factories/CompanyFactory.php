<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Company::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'email' => $this->faker->companyEmail,
            'name' => $this->faker->company,
            'phone' => $this->faker->e164PhoneNumber,
            'currency' => $this->faker->currencyCode,
            'tax_number' => $this->faker->bankAccountNumber,
            'address' => $this->faker->address,
            'is_active' => true,
        ];
    }
}
