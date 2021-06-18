<?php

namespace Modules\EmployeeManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Validation\Rule;
use Modules\EmployeeManagement\Models\ContractDefinition;
use Modules\EmployeeManagement\Models\LeaveGroup;

class ContractsDefinitionController extends Controller
{

    public function index()
    {
        return inertia('Module/EmployeeManagement/ContractDefinition/Index',
            ['contract_definitions'=> ContractDefinition::all()]);
    }


    public function create()
    {
        return inertia('Module/EmployeeManagement/ContractDefinition/Create',
            ['contract_types' => getContractType(),
                'leave_groups' => LeaveGroup::all()->map(function ($group){
                $data['label'] = $group->title;
                $data['value'] = $group->id;

                return $data;
            })]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'max:255', 'string'],
            'type' => ['required', Rule::in(array_column(getContractType(), 'name'))],
            'description' => ['required', 'string'],
            'leave_groups' => ['required'],
            'leave_groups.*.value' => ['required', 'numeric', 'exists:leave_groups,id'],
        ]);

        $definition =  ContractDefinition::create([
            'title' => $request['title'],
            'type' => $request['type'],
            'description' => $request['description']
        ]);

        $leaveGroupData = [];
        $index = 0;
        foreach ($request['leave_groups'] as $group) {
            $leaveGroupData[$index] = $group['value'];
            $index++;
        }

        $definition->leave_groups()->sync($leaveGroupData);

        return redirect()->route('contract-definitions.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
        //return view('employee-management::show');
    }


    public function edit(ContractDefinition $contract_definition)
    {
        $data['id'] = $contract_definition->id;
        $data['title'] = $contract_definition->title;
        $data['type'] = $contract_definition->type;
        $data['description'] = $contract_definition->description;
        $data['leave_groups'] = $contract_definition->leave_groups->map(function ($group){
            $data['label'] = $group->title;
            $data['value'] = $group->id;
            return $data;
        });

        return inertia('Module/EmployeeManagement/ContractDefinition/Edit',
            ['contract_definition'=> $data,
                'leave_groups' => LeaveGroup::all()->map(function ($group){
                    $data['label'] = $group->title;
                    $data['value'] = $group->id;

                    return $data;
                }),
                'contract_types' => getContractType(),

                ]);
    }


    public function update(Request $request, ContractDefinition $contract_definition)
    {
        $request->validate([
            'title' => ['required', 'max:255', 'string'],
            'type' => ['required', Rule::in(array_column(getContractType(), 'name'))],
            'description' => ['required', 'string'],
            'leave_groups' => ['required'],
            'leave_groups.*.value' => ['required', 'numeric', 'exists:leave_groups,id'],
        ]);

        $contract_definition->update([
            'title' => $request['title'],
            'type' => $request['type'],
            'description' => $request['description']
        ]);

        $leaveGroupData = [];
        $index = 0;
        foreach ($request['leave_groups'] as $group) {
            $leaveGroupData[$index] = $group['value'];
            $index++;
        }

        $contract_definition->leave_groups()->sync($leaveGroupData);

        return redirect()->route('contract-definitions.index')->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(ContractDefinition $contract_definition)
    {
        if(!is_null($contract_definition)) {
            $contract_definition->delete();
        }
    }
}
