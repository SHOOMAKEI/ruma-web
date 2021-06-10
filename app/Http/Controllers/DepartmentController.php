<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DepartmentController extends Controller
{
    public function index(Company $company)
    {
        $departments = Department::where('company_id', $company->id)->get()
            ->map(function ($department){
            $data['id'] = $department->id;
            $data['name'] = $department->name;
            $data['code_name'] = $department->code_name;
            $data['company']['id'] = $department->company->id;
            $data['company']['name'] = $department->company->name;
            $data['parent_department']['id'] = $department->parent_department?->id;
            $data['parent_department']['name'] = $department->parent_department?->name;

            return $data;

        });

        return inertia('Department/Index', [
            'departments' => $departments,
            'company' => $company->only(['id', 'name'])
            ]);
    }

    public function create()
    {
        return inertia('Department/Create', [
            'companies' => Company::all(['id','name']),
            'departments' => Department::all()->map(function ($department){
                $data['id'] = $department->id;
                $data['name'] = $department->name;
                $data['company'] = $department->company->name;

                return $data;
            })]);
    }

    public function edit(Department $department)
    {

        $data['id'] = $department->id;
        $data['name'] = $department->name;
        $data['code_name'] = $department->code_name;
        $data['company_id'] = $department->company_id;
        $data['parent_department_id'] = $department->parent_department_id;
        $data['company']['id'] = $department->company->id;
        $data['company']['name'] = $department->company->name;
        $data['parent_department']['id'] = $department->parent_department?->id;
        $data['parent_department']['name'] = $department->parent_department?->name;

        return inertia('Department/Edit', [
            'department' => $data,
            'companies' => Company::all(['id','name']),
            'departments' => Department::all()->map(function ($department){
                $data['id'] = $department->id;
                $data['name'] = $department->name;
                $data['company'] = $department->company->name;

                return $data;
            })
        ]);
    }

    public function store(Request $request)
    {

        $validator =  Validator::make($request->toArray(),[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'company_id' => ['required', 'numeric', 'exists:companies,id'],
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        if(!is_null($request['parent_department_id'])) {
            $validator =  Validator::make($request->toArray(),[
                'parent_department_id' => ['numeric', 'exists:departments,id'],
            ]);

            if($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
        }

        $department = Department::create([
            'name' => $request['name'],
            'code_name' => $request['code_name'],
            'company_id' => $request['company_id'],
            'parent_department_id' => isset($request['parent_department_id'])? $request['parent_department_id']: ''
        ]);

        return redirect()
            ->route('departments.index',['company' => $department->company_id ])
            ->with(['status' => 'Operation Complete successful']);
    }

    public function update(Request $request, Department $department)
    {

        $validator =  Validator::make($request->toArray(),[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'company_id' => ['required', 'numeric', 'exists:companies,id'],
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        if(!is_null($request['parent_department_id'])) {
            $validator =  Validator::make($request->toArray(),[
                'parent_department_id' => ['numeric', 'exists:departments,id'],
            ]);

            if($validator->fails()) {
                return redirect()->back()->withErrors($validator);
            }
        }

        $department->update([
            'name' => $request['name'],
            'code_name' => $request['code_name'],
            'company_id' => $request['company_id'],
            'parent_department_id' => isset($request['parent_department_id'])? $request['parent_department_id']: ''
        ]);

        return redirect()
            ->route('departments.index',['company' => $department->company_id ])
            ->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(Department $department)
    {
        if(!is_null($department)) {
            $department->delete();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }

    public function child_departments(Department $department)
    {
        $departments = Department::where('parent_department_id', $department->id)->get()
            ->map(function ($department){
                $data['id'] = $department->id;
                $data['name'] = $department->name;
                $data['code_name'] = $department->code_name;
                $data['company'] = $department->company->name;
                $data['parent_department']['id'] = $department->parent_department?->id;
                $data['parent_department']['name'] = $department->parent_department?->name;

                return $data;

            });

        return inertia('Department/Index', [
            'departments' => $departments
        ]);
    }
}
