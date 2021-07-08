<?php

namespace App\GraphQL\Queries;

use App\Models\Company;
use Illuminate\Support\Facades\Validator;

class CompanyQueries
{
    public function companies(): array
    {
        return respondWithSuccess('companies', Company::all());
    }

    public function findCompany($_, $agrs): array
    {
        $validator =  Validator::make($agrs,[
            'id' => ['required', 'numeric', 'exists:companies,id'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }
        return respondWithSuccess('company', Company::find($agrs['id']));
    }
}
