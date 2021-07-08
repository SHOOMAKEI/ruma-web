<?php

namespace Modules\StoreManagement\Http\Controllers;

use Illuminate\Http\Request;
use Modules\StoreManagement\Models\District;
use Modules\StoreManagement\Models\GeopoliticalZone;
use Modules\StoreManagement\Models\Region;
use Modules\StoreManagement\Models\SaleZone;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;

class SaleZoneController extends Controller
{
    public function index()
    {
        return inertia('Module/StoreManagement/SaleZone/Index',
            ['sale_zones' => SaleZone::all()]);
    }

    public function create()
    {


        return inertia('Module/StoreManagement/SaleZone/Create',
            ['sale_zonables' => $this->saleZonable()]);
    }

    public function store(Request $request)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $sale_zone = SaleZone::create($this->getModelAttribute($request->toArray()));

        foreach ($request['sale_zonables'] as $zonable)
        {
            if($zonable['type'] == 'districts') {

               $type = District::find($zonable['value']);

               if(is_null($type)) continue;

               $sale_zone->districts()->attach($type->id);
            }

            if($zonable['type'] == 'regions') {

                $type = Region::find($zonable['value']);

                if(is_null($type)) continue;

                $sale_zone->regions()->attach($type->id);
            }

            if($zonable['type'] == 'geopolitical_zones') {

                $type = GeopoliticalZone::find($zonable['value']);

                if(is_null($type)) continue;

                $sale_zone->geopolitical_zones()->attach($type->id);
            }
        }

        return redirect()->route('sale-zones.index')->with(['status' => 'Operation Complete successful']);
    }

    public function edit(SaleZone $sale_zone)
    {

        $data['id'] = $sale_zone->id;
        $data['name'] = $sale_zone->name;
        $data['code_name'] = $sale_zone->code_name;
        $data['sale_zonables'] = $this->saleZonableForSaleZone($sale_zone);

        return inertia('Module/StoreManagement/SaleZone/Edit',
            ['sale_zone' => $data, 'sale_zonables' => $this->saleZonable()]);
    }

    public function update(Request $request, SaleZone $sale_zone)
    {
        if(!is_null($this->validateInput($request->toArray())))
        {
            return $this->validateInput($request->toArray());
        }

        $sale_zone->update($this->getModelAttribute($request->toArray()));

        $sale_zone->districts()->delete();
        $sale_zone->regions()->delete();
        $sale_zone->geopolitical_zones()->delete();

        foreach ($request['sale_zonables'] as $zonable)
        {
            if($zonable['type'] == 'districts') {

                $type = District::find($zonable['value']);

                if(is_null($type)) continue;

                $sale_zone->districts()->attach($type->id);
            }

            if($zonable['type'] == 'regions') {

                $type = Region::find($zonable['value']);

                if(is_null($type)) continue;

                $sale_zone->regions()->attach($type->id);
            }

            if($zonable['type'] == 'geopolitical_zones') {

                $type = GeopoliticalZone::find($zonable['value']);

                if(is_null($type)) continue;

                $sale_zone->geopolitical_zones()->attach($type->id);
            }
        }

        return redirect()->route('sale-zones.index')->with(['status' => 'Operation Complete successful']);
    }

    public function destroy(SaleZone $sale_zone)
    {

        if(!is_null($sale_zone)){
            $sale_zone->districts()->delete();
            $sale_zone->regions()->delete();
            $sale_zone->geopolitical_zones()->delete();
            $sale_zone->delete();
        }

        return redirect()->route('sale-zones.index')->with(['status' => 'Operation Complete successful']);
    }


    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    public function validateInput(array $args)
    {
        $validator =  Validator::make($args,[
            'name' => ['required','string', 'max:255'],
            'code_name' => ['required','string', 'max:255'],
            'sale_zoneables.*.id' => ['required','numeric'],
            'sale_zoneables.*.type' => ['required','string'],
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
        ];
    }

    public function saleZonable()
    {
        $districts = District::all()->map(function ($district){
            $data['value'] = (string) $district->id;
            $data['label'] = $district->name. " - LAG";
            $data['type'] = 'districts';
            return $data;
        });

        $regions = Region::all()->map(function ($region){
            $data['value'] = (string) $region->id;
            $data['label'] = $region->name. " - State";
            $data['type'] = 'regions';
            return $data;
        });

        $geopolitical_zones = GeopoliticalZone::all()->map(function ($geopolitical_zone){
            $data['value'] = (string) $geopolitical_zone->id;
            $data['label'] = $geopolitical_zone->name. " - GPZ";
            $data['type'] = 'geopolitical_zones';
            return $data;
        });

        $merged_districts_and_regions = $districts->merge($regions);

        return $merged_districts_and_regions->merge($geopolitical_zones);
    }

    public function saleZonableForSaleZone(SaleZone $sale_zone)
    {
        $districts = $sale_zone->districts->map(function ($district){
            $data['value'] = (string) $district->id;
            $data['label'] = $district->name. " - LAG";
            $data['type'] = 'districts';
            return $data;
        });

        $regions = $sale_zone->regions->map(function ($region){
            $data['value'] = (string) $region->id;
            $data['label'] = $region->name. " - State";
            $data['type'] = 'regions';
            return $data;
        });

        $geopolitical_zones = $sale_zone->geopolitical_zones->map(function ($geopolitical_zone){
            $data['value'] = (string) $geopolitical_zone->id;
            $data['label'] = $geopolitical_zone->name. " - GPZ";
            $data['type'] = 'geopolitical_zones';
            return $data;
        });

        $merged_districts_and_regions = $districts->merge($regions);

        return $merged_districts_and_regions->merge($geopolitical_zones);
    }
}
