<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class OperationYear extends Model
{
    use HasFactory;
    use LogsActivity;

    protected $guarded =[];

    protected $casts = [
        'start_at' => 'datetime:m-d-Y',
        'end_at' => 'datetime:m-d-Y',
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }

    public function companies(): BelongsToMany
    {
        return $this->belongsToMany(Company::class, 'company_operation_years')->withPivot('is_current');
    }
}
