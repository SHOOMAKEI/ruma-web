<?php

namespace App\GraphQL\Employee\Mutations;

use App\Jobs\CreateUserAccountJob;
use App\Models\Employee\Employee;
use App\Models\Employee\JobStatus;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class EmployeeMutation
{
    public function create($_, array $args): array
    {
        if(!is_null($this->validateInput($args)))
        {
            return $this->validateInput($args);
        }

        getActivityCauser();

        $employee = Employee::create($this->getModelAttribute($args));

        if(array_key_exists('profile_photo',$args['input'])){

            uploadBase64Image($employee, 'profile-photo', $args['input']['profile_photo'], true);
            uploadBase64Image($employee->account(), 'profile-photo', $args['input']['profile_photo'], true);

        }

        dispatch(new CreateUserAccountJob($employee, $args['input']['profile_photo']??''));

        return respondWithSuccess('employee', $employee);
    }

    public function update($_, array $args): array
    {
        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:employees,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['input']['id']);

        if(!is_null($this->validateInput($args)))
        {

            return $this->validateInput($args);
        }

        getActivityCauser();

        try {
            DB::transaction(function () use ($employee, $args){

                $employee->update($this->getModelAttribute($args));

                $employee->account()->forceFill([
                    'email' => $employee->email,
                    'mobile_number' => $employee->mobile_number,
                ])->save();

                if(array_key_exists('profile_photo',$args['input']) ){
                    uploadBase64Image($employee, 'profile-photo', $args['input']['profile_photo'], true);
                    uploadBase64Image($employee->account(), 'profile-photo', $args['input']['profile_photo'], true);
                }

                $employee->account()->syncRoles($employee->position);
            });
        }  catch (\Exception $e) {

            respondWithErrors('there was an error during updating the employee please try again.');
        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeePersonalInformation($_, $args): array
    {
        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:employees,id'],
            'id_number' => ['required','string', 'max:255'],
            'surname' => ['required','string', 'max:255'],
            'gender' => ['required','string', 'max:9', Rule::in(['MALE', 'FEMALE'])],
            'other_name' => ['required','string', 'max:255'],
            'date_of_birth' => ['required','date'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['input']['id']);

        getActivityCauser();

        if(!is_null($employee)){

            if($employee->id_number != $args['input']['id_number'] &&
                Employee::where('id_number',$args['input']['id_number'])->exists())
            {
                return respondWithErrors('The Id number already exists.');
            }

            try {
                DB::transaction(function () use ($employee, $args){

                    $employee->forceFill([
                        'id_number' => $args['input']['id_number'],
                        'surname' => $args['input']['surname'],
                        'other_name' => $args['input']['other_name'],
                        'gender' => $args['input']['gender'],
                        'date_of_birth' => $args['input']['date_of_birth'],
                    ])->save();

                });
            }  catch (\Exception $e) {

                respondWithErrors('there was an error during saving the employee please try again.');
            }

        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeeContactInformation($_, $args): array
    {
        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:employees,id'],
            'email' => ['required','email','string', 'max:255'],
            'mobile_number' => ['required','string', 'max:255'],
            'alternative_email' => ['string','email', 'max:255'],
            'alternative_mobile_number' => ['string', 'max:255'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['input']['id']);

        getActivityCauser();

        if(!is_null($employee)){

            if(($employee->email != $args['input']['email'] &&
                Employee::where('id_number',$args['input']['email'])->exists()) ||
                ($employee->email != $args['input']['mobile_number'] &&
                Employee::where('id_number',$args['input']['mobile_number'])->exists())
            )
            {
                return respondWithErrors('The Id number already exists.');
            }

            try {
                DB::transaction(function () use ($employee, $args){

                    $employee->forceFill([
                        'email' => $args['input']['email'],
                        'mobile_number' => $args['input']['mobile_number'],
                        'alternative_email' => isset($args['input']['alternative_email'])??null,
                        'alternative_mobile_number' => isset($args['input']['alternative_mobile_number'])??null,
                    ])->save();


                    if(!empty($employee->account->id)){

                        $user = User::find($employee->account->id);

                        $user->update([
                            'email' => $args['input']['email'],
                            'mobile_number' => $args['input']['mobile_number'],
                        ]);

                    }

                });
            }  catch (\Exception $e) {

                respondWithErrors('there was an error during saving the employee please try again.');
            }

        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeeAddressInformation($_, $args): array
    {
        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:employees,id'],
            'location' => ['required','string', 'max:255'],
            'address' => ['required','string', 'max:255'],
            'region_id' => ['required','numeric', 'exists:regions,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['input']['id']);

        getActivityCauser();

        if(!is_null($employee)){

            try {
                DB::transaction(function () use ($employee, $args){

                    $employee->forceFill([
                        'location' => $args['input']['location'],
                        'position' => $args['input']['position'],
                        'address' => $args['input']['address'],
                        'region_id' => $args['input']['region_id'],
                    ])->save();

                });
            }  catch (\Exception $e) {

                respondWithErrors('there was an error during saving the employee please try again.');
            }

        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeeOtherInformation($_, $args): array
    {
        $validator =  Validator::make($args['input'],[
            'id' => ['required','numeric', 'exists:employees,id'],
            'resumption_date' => ['required', 'date'],
            'due_date' => ['required', 'date'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['input']['id']);

        getActivityCauser();

        if(!is_null($employee)){

            try {
                DB::transaction(function () use ($employee, $args){

                    $employee->forceFill([
                        'resumption_date' => $args['input']['resumption_date'],
                        'due_date' => $args['input']['due_date']
                    ])->save();

                });
            }  catch (\Exception $e) {

                respondWithErrors('there was an error during saving the employee please try again.');
            }

        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeeProfilePhoto($_, $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:employees,id'],
            'profile_photo' => ['required','string','base64image'],
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['id']);

        getActivityCauser();

        if(!is_null($employee)){

            try {

                uploadBase64Image($employee, 'profile-photo', $args['input']['profile_photo'], true);
                uploadBase64Image($employee->account(), 'profile-photo', $args['input']['profile_photo'], true);

            }  catch (\Exception $e) {

                respondWithErrors('there was an error during saving the employee please try again.');
            }

        }

        return respondWithSuccess('employee', $employee);
    }


    public function delete($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:employees,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['id']);

        getActivityCauser();

        if(!is_null($employee)){

            try {
                DB::transaction(function () use ($employee, $args){

                    $employee->account()->forceFill([
                        'is_active' => false,
                    ])->save();

                    $employee->account()->delete();

                    $employee->delete();
                });
            }  catch (\Exception $e) {

                respondWithErrors('there was an error during deleting the employee please try again.');
            }

        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmploymentStatus($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:employees,id'],
            'status' => ['required','string', Rule::in(array_column(getEmploymentStatuses(), 'name'))]
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['id']);

        getActivityCauser();

        if(!is_null($employee)){

            $employee->forceFill([
                'employment_status' => $args['status']
            ])->save();
        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeeJobStatus($_, array $args): array
    {
        $validator =  Validator::make($args ['input'],[
            'id' => ['required','numeric', 'exists:employees,id'],
            'status' => ['required','string', Rule::in(array_column(getJobStatuses(), 'name'))],
            'from' => [Rule::requiredIf(function () use ($args){
                return $args['input']['status'] === JOB_STATUS_SUSPENDED || JOB_STATUS_ON_LEAVE;
            }), 'date', 'date_format:Y-m-d H:i:s'],
            'to' => [Rule::requiredIf(function () use ($args){
                return $args['input']['status'] === JOB_STATUS_SUSPENDED || JOB_STATUS_ON_LEAVE;
            }), 'date', 'date_format:Y-m-d H:i:s', 'after:from']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['id']);

        getActivityCauser();

        if(!is_null($employee)){

            if($args['input']['status'] === JOB_STATUS_SUSPENDED) {
                JobStatus::create([
                    'job_status' => $args['input']['status'],
                    'form' => $args['input']['from'],
                    'to' => $args['input']['to'],
                    'employee_id' => $employee->id,
                ]);
            }

            if($args['input']['status'] === JOB_STATUS_ON_LEAVE) {
                JobStatus::create([
                    'job_status' => $args['input']['status'],
                    'form' => $args['input']['from'],
                    'to' => $args['input']['to'],
                    'employee_id' => $employee->id,
                ]);
            }

            if($args['input']['status'] === JOB_STATUS_ACTIVE) {
               $employee->account()->forceFill([
                   'is_active' => true
               ]);
            }

            if($args['input']['status'] === JOB_STATUS_IN_ACTIVE) {
                $employee->account()->forceFill([
                    'is_active' => false
                ]);
            }

            if($args['input']['status'] === JOB_STATUS_TERMINATED) {
                $employee->account()->forceFill([
                    'is_active' => false
                ]);

                $employee->account()->delete();
            }

            $employee->forceFill([
                'job_status' => $args['status']
            ])->save();
        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeePosition($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:employees,id'],
            'position' => ['required','string', 'exists:roles,name']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['id']);

        getActivityCauser();

        if(!is_null($employee)){

            $employee->forceFill([
                'position' => $args['position']
            ])->save();

            if(is_numeric($employee->account?->id)){

                User::find($employee->account->id)->syncRoles($args['position']);
            }

        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeePermissions($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:employees,id'],
            'permissions.*.id' => ['required','numeric', 'exists:permissions,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['id']);

        getActivityCauser();

        if(!is_null($employee)){

            $employee->account()->syncPermissions($args['permissions']);
        }

        return respondWithSuccess('employee', $employee);
    }

    public function updateEmployeeCompanies($_, array $args): array
    {
        $validator =  Validator::make($args,[
            'id' => ['required','numeric', 'exists:employees,id'],
            'companies.*.id' => ['required','numeric', 'exists:companies,id'],
            'companies.*.role' => ['required','string', 'exists:roles,name']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        $employee = Employee::find($args['id']);

        getActivityCauser();

        if(!is_null($employee)){
            $employee_companies = [];
            $user_companies = [];

            foreach ($args['companies'] as $company)
            {
                $employee_companies[$company['id']]['employee_type'] = $company['role'];
                $user_companies[$company['id']]['user_type'] = $company['role'];
            }

            $employee->companies()->sync($employee_companies);

            if(is_numeric($employee->account?->id)){

              $user = User::find($employee->account->id);

              $user->companies()->detach();

              $user->companies()->sync($user_companies);

            }
        }

        return respondWithSuccess('employee', $employee);
    }

    public function validateInput(array $args): ?array
    {
        $validator =  Validator::make($args['input'],[
            'id_number' => ['required','string', 'max:255', 'unique:employees,id_number'],
            'surname' => ['required','string', 'max:255'],
            'other_name' => ['required','string', 'max:255'],
            'gender' => ['required','string', 'max:9', Rule::in(['MALE', 'FEMALE'])],
            'email' => ['required','email','string', 'max:255', 'unique:users,email', 'unique:employees,email'],
            'mobile_number' => ['required','string', 'max:255', 'unique:users,mobile_number', 'unique:employees,mobile_number'],
            'alternative_email' => ['string','email', 'max:255'],
            'alternative_mobile_number' => ['string', 'max:255'],
            'profile_photo' => ['string','base64image'],
            'location' => ['required','string', 'max:255'],
            'position' => ['required','string', 'max:255'],
            'address' => ['required','string', 'max:255'],
            'resumption_date' => ['required', 'date'],
            'due_date' => ['required', 'date'],
            'date_of_birth' => ['required','date'],
            'region_id' => ['required','numeric', 'exists:regions,id']
        ]);

        if($validator->fails()) {
            return respondWithErrors( $validator->errors()->all());
        }

        return null;
    }

    public function getModelAttribute(array $args): array
    {
        return [
            'id_number' => $args['input']['id_number'],
            'surname' => $args['input']['surname'],
            'other_name' => $args['input']['other_name'],
            'gender' => $args['input']['gender'],
            'email' => $args['input']['email'],
            'mobile_number' => $args['input']['mobile_number'],
            'alternative_email' => isset($args['input']['alternative_email'])??null,
            'alternative_mobile_number' => isset($args['input']['alternative_mobile_number'])??null,
            'location' => $args['input']['location'],
            'position' => $args['input']['position'],
            'address' => $args['input']['address'],
            'region_id' => $args['input']['region_id'],
            'date_of_birth' => $args['input']['date_of_birth'],
            'resumption_date' => $args['input']['resumption_date'],
            'due_date' => $args['input']['due_date']
        ];
    }
}
