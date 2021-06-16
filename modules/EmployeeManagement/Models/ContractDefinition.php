<?php

namespace Modules\EmployeeManagement\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class ContractDefinition extends Model
{
    use HasFactory;
    use LogsActivity;
    use softDeletes;

    protected $guarded =[];


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }

    public function contracts(): HasMany
    {
        return $this->hasMany(Contract::class);
    }

    public function leave_groups(): BelongsToMany
    {
        return $this->belongsToMany(LeaveGroup::class);
    }

    /**
     * Create a new factory instance for the model.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    protected static function newFactory()
    {
        return \Modules\EmployeeManagement\Database\Factories\ContractDefination::new();
    }
}
