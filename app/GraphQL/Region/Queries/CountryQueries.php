<?php

namespace App\GraphQL\Region\Queries;

use App\Models\Region\Country;

class CountryQueries
{
    public function all(): array
    {
        return respondWithSuccess('countries' , Country::all());
    }
}
