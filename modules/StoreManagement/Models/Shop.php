<?php

namespace Modules\StoreManagement\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\StoreManagement\Database\Factories\ShopFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Shop extends Model
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

    public function user_scope(): MorphToMany
    {
        return $this->morphToMany(User::class,'user_scopeable', 'user_scope_resolution');
    }

    protected static function newFactory(): ShopFactory
    {
        return ShopFactory::new();
    }

    public function district(): BelongsTo
    {
        return $this->belongsTo(District::class);
    }
}
