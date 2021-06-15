<?php

namespace Modules\EmployeeManagement\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Employee extends Model
{
    use HasFactory;

    protected $guarded = [];

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
}
