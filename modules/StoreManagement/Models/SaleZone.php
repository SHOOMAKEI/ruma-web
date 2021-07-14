<?php

namespace Modules\StoreManagement\Models;

use App\Models\User;
use Modules\StoreManagement\Database\Factories\SaleZoneFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class SaleZone extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;


    protected $guarded= [];


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logAll()
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }

    public function countries(): MorphToMany
    {
        return $this->morphedByMany(Country::class, 'sale_zoneable', 'sale_zone_scopes');
    }

    public function geopolitical_zones(): MorphToMany
    {
        return $this->morphedByMany(GeopoliticalZone::class, 'sale_zoneable', 'sale_zone_scopes');
    }

    public function regions(): MorphToMany
    {
        return $this->morphedByMany(Region::class, 'sale_zoneable', 'sale_zone_scopes');
    }

    public function districts(): MorphToMany
    {
        return $this->morphedByMany(District::class, 'sale_zoneable', 'sale_zone_scopes');
    }

    public function shops(): MorphToMany
    {
        return $this->morphedByMany(Shop::class, 'sale_zoneable', 'sale_zone_scopes');
    }

    public function user_scope(): MorphToMany
    {
        return $this->morphToMany(User::class,'user_scopeable', 'user_scope_resolution');
    }

    protected static function newFactory(): SaleZoneFactory
    {
        return SaleZoneFactory::new();
    }
}
