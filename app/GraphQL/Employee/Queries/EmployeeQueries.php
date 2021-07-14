<?php

namespace App\GraphQL\Employee\Queries;

use App\Models\Employee\Employee;
use Illuminate\Support\Facades\Validator;

class EmployeeQueries
{
    public function all(): array
    {
        $employees = Employee::all()->map(function ($query){
            $data['id'] = $query->id;
            $data['id_number'] = $query->id_number;
            $data['surname'] = $query->surname;
            $data['other_name'] = $query->other_name;
            $data['gender'] = $query->gender;
            $data['email'] = $query->email;
            $data['mobile_number'] = $query->mobile_number;
            $data['alternative_email'] = $query->alternative_email;
            $data['alternative_mobile_number'] = $query->alternative_mobile_number;
            $data['region'] = $query->region;
            $data['account'] = $query->account;
            $data['location'] = $query->location;
            $data['position'] = $query->position;
            $data['address'] = $query->address;
            $data['resumption_date'] = $query->resumption_date;
            $data['due_date'] = $query->due_date;
            $data['date_of_birth'] = $query->date_of_birth;
            $data['employment_status'] = $query->employment_status;
            $data['job_statuses'] = $query->job_statuses;
            $data['job_status_description'] = $query->job_status;
            $data['deleted_at'] = $query->deleted_at;
            $data['created_at'] = $query->created_at;
            $data['updated_at'] = $query->updated_at;
            $data['profile_photo'] = $query->profile_photo;

            return $data;
        });

        return respondWithSuccess('employees', $employees);
    }

    public function show($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:employees,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return respondWithSuccess('employee', Employee::find($args['id']));
    }

    public function jobStatuses(): array
    {
        return respondWithSuccess('job_statuses', getJobStatuses());
    }

    public function employmentStatuses(): array
    {
        return respondWithSuccess('employment_statuses', getEmploymentStatuses());
    }
}
