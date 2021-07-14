<?php

namespace Modules\EmployeeManagement\Imports;


use App\Models\Company;
use App\Models\User;
use App\Notifications\NewAccountResetPasswordNotification;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Modules\EmployeeManagement\Models\Employee;
use Spatie\Permission\Models\Role;


class EmployeeImport implements ToCollection, withValidation, withHeadingRow
{

    public function collection(Collection $rows)
    {
        foreach ($rows as $row)
        {
            $employee = Employee::create([
                'id_number' => $row['id_number'],
                'surname' => $row['surname'],
                'other_name' => $row['other_name'],
                'email' => $row['email'],
                'mobile_number' => $row['mobile_number'],
                'alternative_email' => isset($row['alternative_email'])??null,
                'alternative_mobile_number' => isset($row['alternative_mobile_number'])??null,
                'region' => $row['region'],
                'location' => $row['location'],
                'position' => $row['position'],
                'address' => $row['address'],
                'resumption_date' => Carbon::parse($row['resumption_date'])->toDate()??null,
                'due_date' => Carbon::parse($row['due_date'])->toDate()??null,
                'date_of_birth' => Carbon::parse($row['date_of_birth'])->toDate()??null,
                'gender' => $row['gender'],
            ]);

            if($row['create_account']) {
                $user = User::create([
                    'email' => $row['email'],
                    'username' => $row['username'],
                    'password' => Hash::make('omakei'. rand(100000, 999999)),
                    'is_active' => true,
                ]);

                $roleData = [];
                $index = 0;
                foreach (explode(',',$row['roles']) as $role) {

                    $role = Role::where('name',$role)->first();

                    if(!is_null($role)) {
                        $roleData[$index] = $role->name;
                    }

                    $index++;
                }

                $user->syncRoles($roleData);

                $token =  insertForgotPasswordUserToDatabase($user);

                $user->notify(new NewAccountResetPasswordNotification($token));
            }

            $companyData = [];
            $index = 0;
            foreach (explode(',',$row['companies']) as $company) {

                $company = Company::where('code_name',$company)->first();

                if(!is_null($company)) {
                    $companyData[$index] = $company->id;
                }

                $index++;
            }


        }
    }

    public function rules(): array
    {
        return [
            'surname' => ['required', 'string','max:255'],
            'other_name' => ['required', 'string','max:255'],
            'email' => ['required', 'unique:users,email', 'max:255'],
            'mobile_number' => ['required', 'string','max:255'],
            'alternative_email' => ['nullable','string','max:255'],
            'alternative_mobile_number' => ['nullable','string','max:255'],
            'region' => ['required', 'string','max:255'],
            'location' => ['required', 'string','max:255'],
            'position' => ['required', 'string','max:255'],
            'address' => ['required', 'string','max:255'],
            'resumption_date' => ['required'],
            'due_date' => ['required'],
            'date_of_birth' => ['required'],
            'gender' => ['required', Rule::in(['FEMALE', 'MALE'])],
            'username' => ['required_if:create_account,true','nullable' , 'unique:users,username', 'max:255'],
            'roles.*.value' => ['required_if:create_account,true','numeric', 'exists:roles,id'],
            'companies.*.value' => ['required', 'numeric', 'exists:companies,id'],
            'create_account' => ['required', 'boolean']
        ];
    }
}
