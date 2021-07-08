<?php

namespace Modules\StoreManagement\Http\Controllers;

use Modules\StoreManagement\Models\Country;
use Modules\StoreManagement\Models\GeopoliticalZone;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use JetBrains\PhpStorm\ArrayShape;

class GeopoliticalZoneController extends Controller
{

    public function index()
    {
        return inertia('Module/StoreManagement/GeopoliticalZone/Index',
            ['geopolitical_zones' => GeopoliticalZone::with('country')->get()]);
    }

    public function create()
    {
        return inertia('Module/StoreManagement/GeopoliticalZone/Create',
            ['countries' => Country::all()]);
    }

    public function store(Request $request)
    {
//        dd($request->toArray());
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

         GeopoliticalZone::create($this->getModelAttribute($request->toArray()));

        return redirect()->route('geopolitical-zones.index')->with(['status' => 'Operation Complete successful']);
    }

    public function edit(GeopoliticalZone $geopolitical_zone)
    {
        return inertia('Module/StoreManagement/GeopoliticalZone/Edit',
            ['countries' => Country::all(), 'geopolitical_zone' => $geopolitical_zone]);
    }

    public function update(Request $request, GeopoliticalZone $geopolitical_zone)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }


        $geopolitical_zone->update($this->getModelAttribute($request->toArray()));

        return redirect()->route('geopolitical-zones.index')->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(GeopoliticalZone $geopolitical_zone)
    {

        if(!is_null($geopolitical_zone)){
            $geopolitical_zone->delete();
        }

        return redirect()->route('geopolitical-zones.index')->with(['status' => 'Operation Complete successful']);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args)
    {
        $validator =  Validator::make($args,[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'country_id' => ['required','numeric', 'exists:countries,id'],
            'longitude' => ['sometimes', 'required', 'numeric'],
            'latitude' => ['sometimes', 'required', 'numeric']
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
            'country_id' => $args['country_id'],
            'longitude' => $args['longitude'],
            'latitude' => $args['latitude']
        ];
    }

}
