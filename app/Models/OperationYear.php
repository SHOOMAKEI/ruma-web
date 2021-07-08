<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * App\Models\OperationYear
 *
 * @property int $id
 * @property string $name
 * @property string $code_name
 * @property \datetime|null $start_at
 * @property \datetime|null $end_at
 * @property string|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Activitylog\Models\Activity[] $activities
 * @property-read int|null $activities_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Company[] $companies
 * @property-read int|null $companies_count
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear query()
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear whereCodeName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear whereEndAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear whereStartAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OperationYear whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
