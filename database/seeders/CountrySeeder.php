<?php

namespace Database\Seeders;

use App\Models\Region\Country;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use function Symfony\Component\String\s;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (json_decode(File::get(public_path("data/countries.json"))) as $key => $data) {
//            dd(json_encode($data->languages));
            Country::firstOrCreate([
                'name' => $data->name,
                'native' => $data->native,
                'phone' => '+'. $data->phone,
                'continent' => $data->continent,
                'capital' => $data->capital,
                'currency' => $data->currency,

            ]);
        }
    }
}
