<?php

namespace Modules\StoreManagement\Http\Controllers;

use Illuminate\Http\Request;
use Modules\StoreManagement\Models\District;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use Modules\StoreManagement\Models\GeopoliticalZone;
use Modules\StoreManagement\Models\Region;

class DistrictController extends Controller
{

    public function index()
    {
        return inertia('Module/StoreManagement/Districts/Index',
            ['districts' => District::with('region')->get()]);
    }

    public function create()
    {
        return inertia('Module/StoreManagement/Districts/Create',
            ['regions' => Region::all()]);
    }

    public function store(Request $request)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

         District::create($this->getModelAttribute($request->toArray()));

        return redirect()->route('districts.index')->with(['status' => 'Operation Complete successful']);
    }

    public function edit(District $district)
    {
        return inertia('Module/StoreManagement/Districts/Edit',
            ['regions' => Region::all(), 'district' => $district]);
    }

    public function update(Request $request, District $district)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $district->update($this->getModelAttribute($request->toArray()));

        return redirect()->route('districts.index')->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(District $district)
    {

        if(!is_null($district)){
            $district->delete();
        }

        return redirect()->route('districts.index')->with(['status' => 'Operation Complete successful']);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args)
    {
        $validator =  Validator::make($args,[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'region_id' => ['required','numeric', 'exists:regions,id'],
            'longitude' => ['sometimes', 'numeric'],
            'latitude' => ['sometimes', 'numeric']
        ]);

        if($validator->fails()) {
            return redirect()->back()->withErrors($validator);
        }

        return null;
    }

    public function getModelAttribute(array $args)
    {
        return [
            'name' => $args['name'],
            'code_name' => $args['code_name'],
            'region_id' => $args['region_id'],
            'longitude' => isset($args['longitude'])??null,
            'latitude' => isset($args['latitude'])??null
        ];
    }
}
