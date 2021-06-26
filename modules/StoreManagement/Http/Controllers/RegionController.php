<?php

namespace Modules\StoreManagement\Http\Controllers;

use Modules\StoreManagement\Models\Country;
use Modules\StoreManagement\Models\GeopoliticalZone;
use Modules\StoreManagement\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class RegionController extends Controller
{

    public function index()
    {
        return inertia('Module/StoreManagement/Region/Index',
            ['regions' => Region::with('geopolitical_zone')->get()]);
    }

    public function create()
    {
        return inertia('Module/StoreManagement/Region/Create',
            ['geopolitical_zones' => GeopoliticalZone::all()]);
    }

    public function store(Request $request)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        getActivityCauser();

        $region = Region::create($this->getModelAttribute($request->toArray()));

        return redirect()->route('regions.index')->with(['status' => 'Operation Complete successful']);
    }

    public function edit(Region $region)
    {
        return inertia('Module/StoreManagement/Region/Edit',
            ['geopolitical_zones' => GeopoliticalZone::all(), 'region' => $region]);
    }

    public function update(Request $request, Region $region)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }


        $region->update($this->getModelAttribute($request->toArray()));

        return redirect()->route('regions.index')->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(Region $region)
    {

        if(!is_null($region)){
            $region->delete();
        }

        return redirect()->route('regions.index')->with(['status' => 'Operation Complete successful']);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args)
    {
        $validator =  Validator::make($args,[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'geopolitical_zone_id' => ['required','numeric', 'exists:geopolitical_zones,id'],
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
            'geopolitical_zone_id' => $args['geopolitical_zone_id'],
            'longitude' => isset($args['longitude'])??null,
            'latitude' => isset($args['latitude'])??null
        ];
    }

}
