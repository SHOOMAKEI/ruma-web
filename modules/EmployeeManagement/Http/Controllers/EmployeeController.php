<?php

namespace Modules\EmployeeManagement\Http\Controllers;

use App\Models\Company;
use App\Models\User;
use App\Notifications\NewAccountResetPasswordNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Modules\EmployeeManagement\Models\Contract;
use Modules\EmployeeManagement\Models\ContractDefinition;
use Modules\EmployeeManagement\Models\Employee;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class EmployeeController extends Controller
{

    public function index()
    {
        return inertia('Module/EmployeeManagement/Employee/Index',
            ['employees' => Employee::all()]);
    }


    public function create()
    {
        return inertia('Module/EmployeeManagement/Employee/Create',
            [
            'roles' => Role::where('guard_name','web')->get()->map(function ($role){
                $data['value'] = (string) $role->id;
                $data['label'] = $role->name;

                return $data;
            }),
            'companies' => Company::all()->map(function ($company){
                $data['value'] = (string) $company->id;
                $data['label'] = $company->name;

                return $data;
            }),
            'permissions' => Permission::where('guard_name', 'web')->get()->map(function ($permission){
                $data['id'] =  $permission->id;
                $data['name'] = $permission->name;
                $data['checked'] = false;

                return $data;
            })
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'surname' => ['required'],
            'other_name' => ['required'],
            'email' => ['required', 'unique:users,email', 'max:255'],
            'mobile_number' => ['required'],
            'alternative_email' => ['required'],
            'alternative_mobile_number' => ['required'],
            'region' => ['required'],
            'location' => ['required'],
            'position' => ['required'],
            'address' => ['required'],
            'photo' => ['sometimes', 'base64image'],
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


        DB::transaction(function () use ($request) {
           $employee =  Employee::create([
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
            ]);

            $user = User::create([
                'email' => $request['email'],
                'username' => $request['username'],
                'password' => Hash::make($request['password']),
                'is_active' => $request['is_active']??true,
            ]);

            if(!empty($request['photo'])){
                uploadBase64Image($employee, 'profile-photo', $request['photo'], true);
                uploadBase64Image($user, 'profile-photo', $request['photo'], true);
            }

            $roleData = [];
            $index = 0;
            foreach ($request['roles'] as $role) {
                $roleData[$index] = $role['value'];
                $index++;
            }

            $user->syncRoles($roleData);

            $companyData = [];
            $index = 0;
            foreach ($request['companies'] as $role) {
                $companyData[$index] = $role['value'];
                $index++;
            }

            $user->companies()->sync($companyData);
            $employee->companies()->sync($companyData);

            $permissions = array_filter($request['permissions'], function($permission) {
                return $permission['checked'] == true;
            } );

            $user->permissions()->detach();

            collect($permissions)->map(function ($permission) use ($user){

                $user->givePermissionTo($permission['name']);

            });

            if($request['send_reset_password_notification']) {

                $token =  insertForgotPasswordUserToDatabase($user);

                $user->notify(new NewAccountResetPasswordNotification($token));
            }

        });

        return redirect()->route('employees.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show(Employee $employee)
    {
        return inertia('Module/EmployeeManagement/Profile/Index',
            [
             'employee' => $employee->with('leaves','contracts.contract_definition', 'account', 'companies')->first(),
             'companies' => Company::all()->map(function ($company){
                 $data['value'] = (string) $company->id;
                 $data['label'] = $company->name;

                 return $data;
             }),
                'job_statuses' => getJobStatuses(),
                'contract_definitions' => ContractDefinition::all()
            ]);
    }


    public function edit($id)
    {
        return inertia('Module/EmployeeManagement/Employee/Index');
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }

    public function personalInformation(Request $request, Employee $employee)
    {
        $request->validate([
            'surname' => ['required', 'string', 'max:255'],
            'other_name' => ['required', 'string', 'max:255'],
            'gender' => ['required', 'string', 'max:255', Rule::in(['MALE', 'FEMALE'])],
            'date_of_birth' => ['required', 'date'],
        ]);

        if($employee->id_number != $request['id_number']){
            $request->validate([
                'id_number' => ['required', 'string', 'unique:employees,id_number'],
            ]);
        }

        if(!empty($employee->account?->username)){

            if($employee->account?->username != $request['username']){
                $request->validate([
                    'username' => ['required', 'string', 'unique:users,username'],
                ]);
            }

            $request->validate([
                'is_active' => ['required', 'boolean'],
            ]);

            $employee->account->forceFill([
                'username' => $request['username'],
                'is_active' => $request['is_active'],
            ])->save();
        }

        $employee->forceFill([
            'surname' => $request['surname'],
            'id_number' => $request['id_number'],
            'other_name' => $request['other_name'],
            'gender' => $request['gender'],
            'date_of_birth' => $request['date_of_birth'],
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);

    }

    public function profilePhoto(Request $request, Employee $employee)
    {
        $request->validate([
            'photo' => ['required', 'base64image'],
        ]);

        uploadBase64Image($employee, 'profile-photo', $request['photo'], true);

        if(!empty($employee->account?->id)){

            uploadBase64Image(User::find($employee->account->id), 'profile-photo', $request['photo'], true);
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);

    }

    public function contactInformation(Request $request, Employee $employee)
    {
        $request->validate([
            'alternative_mobile_number' => ['string', 'max:255'],
            'alternative_email' => ['email', 'max:255'],
            'mobile_number' => ['required', 'string', 'max:255'],
        ]);

        if(!empty($employee->account?->username)){

            if($employee->account?->username != $request['username']){
                $request->validate([
                    'email' => ['required', 'email', 'max:255', 'unique:users,email'],
                ]);
            }

            $employee->account->forceFill([
                'email' => $request['email'],
            ])->save();
        }

        $employee->forceFill([
            'alternative_mobile_number' => $request['alternative_mobile_number'],
            'alternative_email' => $request['alternative_email'],
            'mobile_number' => $request['mobile_number'],
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function addressInformation(Request $request, Employee $employee)
    {
        $request->validate([
            'region' => ['string', 'max:255'],
            'location' => ['string', 'max:255'],
            'address' => ['string', 'max:255'],
        ]);

        $employee->forceFill([
            'region' => $request['region']?? null,
            'location' => $request['location']?? null,
            'address' => $request['address']?? null,
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function otherInformation(Request $request, Employee $employee)
    {
        $request->validate([
            'resumption_date' => ['required', 'date', 'max:255'],
            'due_date' => ['required', 'date', 'max:255'],
        ]);

        $employee->forceFill([
            'resumption_date' => $request['resumption_date'],
            'due_date' => $request['due_date'],
        ])->save();

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function companiesInformation(Request $request, Employee $employee)
    {

        $request->validate([
            'companies' => ['required'],
            'companies.*.value' => ['required', 'numeric', 'exists:companies,id'],
        ]);


        $companyData = [];
        $index = 0;
        foreach ($request['companies'] as $role) {
            $companyData[$index] = $role['value'];
            $index++;
        }

        $employee->companies()->sync($companyData);


        if(!empty($employee->account?->id)){

            User::find($employee->account->id)->companies()->sync($companyData);
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);

    }

    public function addContractInformation(Request $request, Employee $employee)
    {

        $request->validate([
            'started_at' => ['required', 'date'],
            'ended_at' => ['required', 'date', 'after:started_at'],
            'contract_definition_id' => ['required', 'numeric', 'exists:contract_definitions,id'],
            'status' => ['required', 'string', Rule::in(['SUSPENDED','ACTIVE', 'TERMINATED'])],
        ]);

        Contract::create([
            'started_at' => $request['started_at'],
            'ended_at' => $request['ended_at'],
            'contract_definition_id' => $request['contract_definition_id'],
            'status' => $request['status'],
            'employee_id' => $employee->id
        ]);

        return redirect()->back()->with(['status' => 'Operation Complete successful']);

    }
}
