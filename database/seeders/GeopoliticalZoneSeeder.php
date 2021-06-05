<?php

namespace Database\Seeders;

use App\Models\Region\Country;
use App\Models\Region\GeopoliticalZone;
use App\Models\Region\Region;
use Illuminate\Database\Seeder;

class GeopoliticalZoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $country = Country::firstOrCreate([
            'name' => 'Nigeria',
            'native' => 'Nigeria',
            'phone' => '234',
            'continent' => 'AF',
            'capital' => 'Abuja',
            'currency' => 'NGN',
        ]);

       $geo1 = GeopoliticalZone::firstOrCreate([
            'country_id' => $country->id,
            'name' => 'North Central',
            'code_name' => 'NC',
       ]);

       Region::firstOrCreate([
           'geopolitical_zone_id' => $geo1->id,
           'name' => 'Benue',
           'code_name' => 'NC-B',
       ]);

       Region::firstOrCreate([
            'geopolitical_zone_id' => $geo1->id,
            'name' => 'Kogi',
            'code_name' => 'NC-K',
       ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo1->id,
            'name' => 'Kwara',
            'code_name' => 'NC-KW',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo1->id,
            'name' => 'Nasarawa',
            'code_name' => 'NC-NS',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo1->id,
            'name' => 'Niger',
            'code_name' => 'NC-N',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo1->id,
            'name' => 'Plateau',
            'code_name' => 'NC-P',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo1->id,
            'name' => 'Federal Capital Territory',
            'code_name' => 'NC-FCT',
        ]);


        $geo2 = GeopoliticalZone::firstOrCreate([
            'country_id' => $country->id,
            'name' => 'North West',
            'code_name' => 'NW',
       ]);

       Region::firstOrCreate([
           'geopolitical_zone_id' => $geo2->id,
           'name' => 'Jigawa',
           'code_name' => 'NW-J',
       ]);

       Region::firstOrCreate([
            'geopolitical_zone_id' => $geo2->id,
            'name' => 'Kaduna',
            'code_name' => 'NW-KD',
       ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo2->id,
            'name' => 'Kano',
            'code_name' => 'NW-KN',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo2->id,
            'name' => 'Katsina',
            'code_name' => 'NW-KT',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo2->id,
            'name' => 'Kebbi',
            'code_name' => 'NW-KB',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo2->id,
            'name' => 'Sokoto',
            'code_name' => 'NW-SK',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo2->id,
            'name' => 'Zamfara',
            'code_name' => 'NW-ZM',
        ]);

        $geo3 = GeopoliticalZone::firstOrCreate([
            'country_id' => $country->id,
            'name' => 'South South',
            'code_name' => 'SS',
       ]);

       Region::firstOrCreate([
           'geopolitical_zone_id' => $geo3->id,
           'name' => 'Akwa Ibom',
           'code_name' => 'SS-AI',
       ]);

       Region::firstOrCreate([
        'geopolitical_zone_id' => $geo3->id,
        'name' => 'Bayelsa',
        'code_name' => 'SS-B',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo3->id,
            'name' => 'Cross River',
            'code_name' => 'SS-CR',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo3->id,
            'name' => 'Rivers',
            'code_name' => 'SS-R',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo3->id,
            'name' => 'Delta',
            'code_name' => 'SS-D',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo3->id,
            'name' => 'Edo',
            'code_name' => 'SS-E',
        ]);

        $geo4 = GeopoliticalZone::firstOrCreate([
            'country_id' => $country->id,
            'name' => 'North East',
            'code_name' => 'NE',
       ]);

       Region::firstOrCreate([
           'geopolitical_zone_id' => $geo4->id,
           'name' => 'Adamawa',
           'code_name' => 'SS-AM',
       ]);

       Region::firstOrCreate([
        'geopolitical_zone_id' => $geo4->id,
        'name' => 'Bauchi',
        'code_name' => 'SS-BU',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo4->id,
            'name' => 'Borno',
            'code_name' => 'SS-',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo4->id,
            'name' => 'Taraba',
            'code_name' => 'SS-TR',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo4->id,
            'name' => 'Yobe',
            'code_name' => 'SS-Y',
        ]);

        $geo5 = GeopoliticalZone::firstOrCreate([
            'country_id' => $country->id,
            'name' => 'North East',
            'code_name' => 'NE',
       ]);

       Region::firstOrCreate([
           'geopolitical_zone_id' => $geo5->id,
           'name' => 'Abia',
           'code_name' => 'SS-A',
       ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo5->id,
            'name' => 'Anambra',
            'code_name' => 'SS-AN',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo5->id,
            'name' => 'Ebonyi',
            'code_name' => 'SS-EB',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo5->id,
            'name' => 'Enugu',
            'code_name' => 'SS-EN',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo5->id,
            'name' => 'Imo',
            'code_name' => 'SS-I',
        ]);

        $geo6 = GeopoliticalZone::firstOrCreate([
            'country_id' => $country->id,
            'name' => 'North East',
            'code_name' => 'NE',
        ]);

        Region::firstOrCreate([
           'geopolitical_zone_id' => $geo6->id,
           'name' => 'Ekiti',
           'code_name' => 'SS-E',
        ]);

        Region::firstOrCreate([
            'geopolitical_zone_id' => $geo6->id,
            'name' => 'Lagos',
            'code_name' => 'SS-L',
        ]);

         Region::firstOrCreate([
            'geopolitical_zone_id' => $geo6->id,
            'name' => 'Ogun',
            'code_name' => 'SS-OG',
         ]);

         Region::firstOrCreate([
            'geopolitical_zone_id' => $geo6->id,
            'name' => 'Ondo',
            'code_name' => 'SS-ON',
         ]);

         Region::firstOrCreate([
            'geopolitical_zone_id' => $geo6->id,
            'name' => 'Osun',
            'code_name' => 'SS-OS',
         ]);

         Region::firstOrCreate([
            'geopolitical_zone_id' => $geo6->id,
            'name' => 'Oyo',
            'code_name' => 'SS-OY',
         ]);
    }
}
