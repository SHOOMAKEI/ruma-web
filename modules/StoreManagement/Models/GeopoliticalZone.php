<?php

namespace Modules\StoreManagement\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Facade\CauserResolver;

class GeopoliticalZone extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;


    protected $guarded= [];

    protected $casts = [
        'longitude' => 'double',
        'latitude' => 'double'
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logAll()
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }

    public function country(): BelongsTo
    {
        return $this->belongsTo(Country::class);
    }


    public function sale_zone(): MorphToMany
    {
        return $this->morphToMany(SaleZone::class,'sale_zoneable', 'sale_zone_scopes');
    }

    public function user_scope(): MorphToMany
    {
        return $this->morphToMany(User::class,'user_scopeable', 'user_scope_resolution');
    }
}
