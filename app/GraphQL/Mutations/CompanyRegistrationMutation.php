<?php

namespace App\GraphQL\Mutations;

use App\Exceptions\ValidationException;
use App\Models\Company;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;
use Spatie\MediaLibrary\MediaCollections\Exceptions\InvalidBase64Data;

class CompanyRegistrationMutation
{
    public function index(): array
    {
        return  respondWithSuccess('companies', Company::where('is_active', true)->get());
    }

    public function show($_, array $args): array
    {
        return respondWithSuccess('company', Company::where('id', $args['id'])->first());
    }

    public function store($_, array $args): array
    {

        $this->validateInput($args);

       $company = Company::create($this->getModelAttribute($args));

       if(!empty($args['input']['logo'])){
           uploadBase64Image($company, 'company-logo', $args['input']['logo'], true);
       }

       return respondWithSuccess('company', $company);

    }

    public function update($_, array $args): Company|array
    {

        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        $validator = Validator::make($args['input'],[
            'id' => ['required', 'numeric', 'exists:companies,id']
        ]);

        if($validator->fails()){
            return respondWithErrors($validator->errors()->all());
        }

        $company = Company::find($args['input']['id']);

        $company->update($this->getModelAttribute($args));

        if(!empty($args['input']['logo'])){
            uploadBase64Image($company, 'company-logo', $args['input']['logo'], true);
        }

        return respondWithSuccess('company', $company);

    }

    public function delete($_, array $args): Company|array
    {
        $validator = Validator::make($args['input'],[
            'id' => ['required', 'numeric', 'exists:companies,id']
        ]);

        if($validator->fails()){
            return respondWithErrors($validator->errors()->all());
        }

        $company = Company::find($args['id']);

        if(!is_null($company)) {
            $company->delete();
        }

        return respondWithSuccess('company', $company);

    }

    public function validateInput(array $args)
    {
        $validator =  Validator::make($args['input'],[
            'email' => ['required', 'email', 'string'],
            'name' => ['required','string'],
            'phone' => ['required','string'],
            'currency' => ['required','string', 'max:3'],
            'tax_number' => ['required', 'string'],
            'address' => ['required', 'string'],
            'is_active' => ['required', 'bool'],
            'logo' => ['sometimes', 'base64image'],
        ]);

        if($validator->fails()) {
           return respondWithErrors( $validator->errors()->all());
        }
    }

    public function getModelAttribute(array $args)
    {
        return [
            'email' => $args['input']['email'],
            'name' => $args['input']['name'],
            'phone' => $args['input']['phone'],
            'currency' => $args['input']['currency'],
            'tax_number' => $args['input']['tax_number'],
            'address' => $args['input']['address'],
            'is_active' => $args['input']['is_active'],
        ];
    }

}
