<?php

namespace Database\Factories;

use App\Models\Employee\Employee;
use Modules\StoreManagement\Models\Region;
use Illuminate\Database\Eloquent\Factories\Factory;
use Spatie\Permission\Models\Role;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id_number' => "MIRG/". rand(0000,9999)."/". rand(000, 999),
            'surname' => $this->faker->lastName,
            'other_name' => $this->faker->firstName ." ". $this->faker->name,
            'gender' => $this->faker->randomElement(['FEMALE', 'MALE']),
            'email' => $this->faker->email,
            'mobile_number' => $this->faker->e164PhoneNumber,
            'alternative_email' => $this->faker->email,
            'alternative_mobile_number' => $this->faker->e164PhoneNumber,
            'location' => $this->faker->country,
            'position' => $this->faker->randomElement(['product-manager', 'data-analyst', 'sales-manager', 'sales-representative', 'supervisor', 'system-administrator']),
            'address' => $this->faker->address,
            'region_id' => (Region::inRandomOrder()
                            ->limit(1)
                            ->get())[0]->id,
            'date_of_birth' => $this->faker->date(),
            'resumption_date' => $this->faker->date(),
            'due_date' => $this->faker->date()
        ];
    }
}
