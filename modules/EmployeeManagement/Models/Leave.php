<?php

namespace Modules\EmployeeManagement\Models;

use App\Models\OperationYear;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Leave extends Model
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

    /**
     * Create a new factory instance for the model.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    protected static function newFactory()
    {
        return \Modules\EmployeeManagement\Database\Factories\Leave::new();
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function leave_group():BelongsTo
    {
        return $this->belongsTo(LeaveGroup::class);
    }

    public function operation_year():BelongsTo
    {
        return $this->belongsTo(OperationYear::class);
    }
}
