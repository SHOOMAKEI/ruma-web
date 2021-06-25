<?php

namespace App\Models\Region;

use App\Models\User;
use Database\Factories\DistrictFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class District extends Model
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

    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class);
    }

    public function shops(): HasMany
    {
        return $this->hasMany(Shop::class);
    }

    public function sale_zone(): MorphToMany
    {
        return $this->morphToMany(SaleZone::class,'sale_zoneable', 'sale_zone_scopes');
    }

    public function user_scope(): MorphToMany
    {
        return $this->morphToMany(User::class,'user_scopeable', 'user_scope_resolution');
    }

    protected static function newFactory(): DistrictFactory
    {
        return DistrictFactory::new();
    }
}
