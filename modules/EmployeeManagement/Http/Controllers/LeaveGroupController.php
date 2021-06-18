<?php

namespace Modules\EmployeeManagement\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Validation\Rule;
use Modules\EmployeeManagement\Models\LeaveGroup;

class LeaveGroupController extends Controller
{

    public function index()
    {
        return inertia('Module/EmployeeManagement/LeaveGroup/Index',
            ['leave_groups' => LeaveGroup::all()]);
    }


    public function create()
    {
        return inertia('Module/EmployeeManagement/LeaveGroup/Create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'number_of_days' => ['required', 'numeric'],
            'description' => ['required', 'string'],
        ]);

        LeaveGroup::create([
            'title' => $request['name'],
            'number_of_days' => $request['number_of_days'],
            'description' => $request['description']
        ]);

        return redirect()->route('leave-groups.index')->with(['status' => 'Operation Complete successful']);
    }


    public function show($id)
    {
//        return view('employee-management::show');
    }


    public function edit(LeaveGroup $leave_group)
    {
        return inertia('Module/EmployeeManagement/LeaveGroup/Edit',['leave_group' => $leave_group]);
    }


    public function update(Request $request, LeaveGroup $leave_group)
    {
        $request->validate([
            'name' => ['required', 'max:255', 'string'],
            'number_of_days' => ['required', 'numeric'],
            'description' => ['required', 'string'],
        ]);

        $leave_group->update([
            'title' => $request['name'],
            'number_of_days' => $request['number_of_days'],
            'description' => $request['description']
        ]);

        return redirect()->route('leave-groups.index')->with(['status' => 'Operation Complete successful']);
    }


    public function destroy(LeaveGroup $leave_group)
    {
        if(!is_null($leave_group)) {
            $leave_group->delete();
        }

        return redirect()->route('leave-groups.index')->with(['status' => 'Operation Complete successful']);
    }
}
