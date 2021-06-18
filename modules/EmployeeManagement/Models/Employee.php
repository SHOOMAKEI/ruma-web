<?php

namespace Modules\EmployeeManagement\Models;

use App\Models\Company;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Employee extends Model implements HasMedia
{
    use HasFactory;
    use LogsActivity;
    use softDeletes;
    use InteractsWithMedia;

    protected $guarded =[];


    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }

    /**
     * Create a new factory instance for the model.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    protected static function newFactory()
    {
        return \Modules\EmployeeManagement\Database\Factories\Employee::new();
    }

    public  function contracts(): HasMany
    {
        return $this->hasMany(Contract::class);
    }

    public  function contract_statues(): HasMany
    {
        return $this->hasMany(ContractStatus::class);
    }

    public  function leaves(): HasMany
    {
        return $this->hasMany(ContractStatus::class);
    }
    public function companies(): BelongsToMany
    {
        return $this->belongsToMany(Company::class, 'employee_companies');
    }
}
