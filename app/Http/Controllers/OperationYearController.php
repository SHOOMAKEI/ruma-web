<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\OperationYear;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OperationYearController extends Controller
{

    public function index()
    {
        return inertia('OperationYear/Index',[
            'operation_years' => OperationYear::all()]);
    }


    public function create()
    {
        return inertia('OperationYear/Create', [
            'companies' => Company::where('is_active', true)->get()->map(function ($company){
            $data['value'] = (string) $company->id;
            $data['label'] = $company->name;

            return $data;
        })]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code_name' => ['required', 'string', 'max:255'],
            'start_at' => ['required', 'date'],
            'end_at' => ['required', 'date', 'after:start_date'],
            'is_current' => ['required', 'boolean'],
            'companies' => ['required'],
            'companies.*.value' => ['required', 'numeric', 'exists:companies,id']
            ]);

        $year = OperationYear::create([
            'name' => $request['name'],
            'code_name' => $request['code_name'],
            'start_at' => $request['start_at'],
            'end_at' => $request['end_at'],
        ]);

        $companyData = [];
        $index = 0;
        foreach ($request['companies'] as $company) {
            $companyData[$index]['company_id'] = $company['value'];
            $companyData[$index]['is_current'] = $request['is_current'];
            $index++;
        }

        $year->companies()->sync($companyData);

        return redirect()->route('operation-years.index')->with(['status' => 'Operation Complete successful']);
    }



    public function edit(OperationYear $operation_year)
    {
        $year['id'] = $operation_year->id;
        $year['name'] = $operation_year->name;
        $year['code_name'] = $operation_year->code_name;
        $year['start_at'] = Carbon::parse($operation_year->start_at)->format('Y-m-d');
        $year['end_at'] = Carbon::parse($operation_year->end_at)->format('Y-m-d');
        $year['companies'] = $operation_year->companies->map(function ($company){
        $data['value'] = (string) $company->id;
        $data['label'] = $company->name;
        $data['is_current'] = $company->pivot?->is_current;

        return $data;
    });
        $year['id'] = $operation_year->id;
        return inertia('OperationYear/Edit', [
            'companies' => Company::where('is_active', true)->get()->map(function ($company){
                $data['value'] = (string) $company->id;
                $data['label'] = $company->name;

                return $data;
            }),
            'operation_year' => $year
        ]);
    }


    public function update(Request $request, OperationYear $operation_year)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'code_name' => ['required', 'string', 'max:255'],
            'start_at' => ['required', 'date'],
            'end_at' => ['required', 'date', 'after:start_date'],
            'is_current' => ['required', 'boolean'],
            'companies' => ['required'],
            'companies.*.value' => ['required', 'numeric', 'exists:companies,id']
        ]);

        if(!empty($operation_year)){
            $operation_year->update([
                'name' => $request['name'],
                'code_name' => $request['code_name'],
                'start_at' => $request['start_at'],
                'end_at' => $request['end_at'],
            ]);

            $companyData = [];
            $index = 0;
            foreach ($request['companies'] as $company) {
                $companyData[$company['value']]['is_current'] = $request['is_current'];
                $index++;
            }

            $operation_year->companies()->sync($companyData);

        }

        return redirect()->route('operation-years.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(OperationYear $operation_year)
    {
        if(!empty($operation_year)) {

            $operation_year->delete();
        }

        return redirect()->back()->with(['status' => 'Operation Complete successful']);
    }
}
