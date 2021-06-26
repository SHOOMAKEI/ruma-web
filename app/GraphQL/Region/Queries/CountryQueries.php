<?php

namespace App\GraphQL\Region\Queries;

use Modules\StoreManagement\Models\Country;

class CountryQueries
{
    public function all(): array
    {
        return respondWithSuccess('countries' , Country::all());
    }
}
