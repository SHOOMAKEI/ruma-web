<?php


namespace Modules\EmployeeManagement\Repository;



use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Modules\EmployeeManagement\Models\Employee;

class EmployeeRepository
{
    public function createEmployee(Request $request)
    {
        $this->validateRequest($request);

        $employee =  Employee::create($this->getEmployeeModelAttributes($request->toArray()));

        $companyData = [];
        $index = 0;
        foreach ($request['companies'] as $role) {
            $companyData[$index] = $role['value'];
            $index++;
        }

        $employee->companies()->sync($companyData);

        if(!empty($request['photo'])){
            $request->validate([
                'photo' => ['sometimes', 'base64image'],
            ]);
            uploadBase64Image($employee, 'profile-photo', $request['photo'], true);
        }
    }

    public function validateRequest(Request $request)
    {
        $request->validate([
            'surname' => ['required', 'string','max:255'],
            'other_name' => ['required', 'string','max:255'],
            'email' => ['required', 'unique:users,email', 'max:255'],
            'mobile_number' => ['required', 'string','max:255'],
            'alternative_email' => ['required', 'string','max:255'],
            'alternative_mobile_number' => ['required', 'string','max:255'],
            'region' => ['required', 'string','max:255'],
            'location' => ['required', 'string','max:255'],
            'position' => ['required', 'string','max:255'],
            'address' => ['required', 'string','max:255'],
            'resumption_date' => ['required', 'date'],
            'due_date' => ['required', 'date'],
            'date_of_birth' => ['required', 'date'],
            'gender' => ['required', Rule::in(['FEMALE', 'MALE'])],
            'username' => ['required_if:create_account,true','string' , 'unique:users,username', 'max:255'],
            'password' => ['required_if:create_account,true','string', 'max:255', 'confirmed'],
            'roles.*.value' => ['required_if:create_account,true','numeric', 'exists:roles,id'],
            'companies.*.value' => ['required', 'numeric', 'exists:companies,id'],
            'is_active' => ['required_if:create_account,true', 'boolean'],
            'permissions.*.id' => ['required_if:create_account,true', 'numeric', 'exists:permissions,id']
        ]);

    }

    public function getEmployeeModelAttributes(array $request)
    {
        return [
            'id_number' => 'MIRG/'. Carbon::now()->format('m').Carbon::now()->format('y').'/'. rand(111,999),
            'surname' => $request['surname'],
            'other_name' => $request['other_name'],
            'email' => $request['email'],
            'mobile_number' => $request['mobile_number'],
            'alternative_email' => $request['alternative_email'],
            'alternative_mobile_number' => $request['alternative_mobile_number'],
            'region' => $request['region'],
            'location' => $request['location'],
            'position' => $request['position'],
            'address' => $request['address'],
            'resumption_date' => $request['resumption_date'],
            'due_date' => $request['due_date'],
            'date_of_birth' => $request['date_of_birth'],
            'gender' => $request['gender'],
        ];
    }
}
