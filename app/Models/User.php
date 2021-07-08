<?php

namespace App\Models;

use App\Traits\RegisterDevice;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use JetBrains\PhpStorm\ArrayShape;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Sanctum\HasApiTokens;
use Modules\EmployeeManagement\Models\Employee;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $username
 * @property int|null $employee_id
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property int $is_active
 * @property int $has_enable_otp
 * @property \Illuminate\Support\Carbon|null $otp_expired_at
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int|null $current_company_id
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Activitylog\Models\Activity[] $activities
 * @property-read int|null $activities_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Company[] $companies
 * @property-read int|null $companies_count
 * @property-read Employee|null $employee
 * @property-read Collection $account_permissions
 * @property-read array $account_roles
 * @property-read string $profile_photo
 * @property-read array $settings
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection|\Spatie\MediaLibrary\MediaCollections\Models\Media[] $media
 * @property-read int|null $media_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Permission\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCurrentCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmployeeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereHasEnableOtp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereOtpExpiredAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorRecoveryCodes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorSecret($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUsername($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable implements MustVerifyEmail, HasMedia
{
    use HasFactory;
    use Notifiable;
    use HasApiTokens;
    use HasRoles;
    use HasPermissions;
    use LogsActivity;
    use TwoFactorAuthenticatable;
    use InteractsWithMedia;
    use RegisterDevice;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'email',
        'password',
        'has_enable_otp',
        'otp_expired_at',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'otp_expired_at' => 'datetime',
    ];

    protected $appends = [
        'settings', 'account_roles', 'account_permissions', 'profile_photo'
    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnlyDirty()
            ->dontSubmitEmptyLogs();
    }

    public function getAccountRolesAttribute(): array
    {
        $data=[];
        $index=0;
        foreach ($this->getRoleNames()?->toArray() as $roles)
        {
            $data[$index]['name'] = $roles;
            $index++;
        }
        return $data;
    }

    public function getAccountPermissionsAttribute(): Collection
    {
        return $this->getAllPermissions();
    }

    public function getProfilePhotoAttribute(): string
    {
        if ($this->getFirstMediaUrl('profile-photo') == null) {
            return asset('avatar/company_avatar.jpg');
        }

        return $this->getFirstMediaUrl('profile-photo');
    }

    public function companies(): BelongsToMany
    {
        return $this->belongsToMany(Company::class, 'user_companies');
    }

    public function current_company()
    {
        if(!is_numeric($this->current_company_id)){
            return null;
        }

        return Company::find($this->current_company_id);
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }


    #[ArrayShape(["id" => "int", "username" => "string", "employee_id" => "int|null",
        'email' => "string", "current_company_id" => "int|null",
        "company_list" => "\Illuminate\Support\Collection",
        "has_enable_otp" => "int", 'is_active' => "int"])]
    function getBasicDetail(){
        return [
            "id"=>$this->id,
            "username"=>$this->username,
            "employee_id"=>$this->employee_id,
            'email'=>$this->email,
            "current_company_id"=>$this->current_company_id,
            "company_list"=>$this->companies()->pluck('id',"name","email","currency"),
            "has_enable_otp"=>$this->has_enable_otp,
            'is_active'=>$this->is_active

        ];
    }

    #[ArrayShape([
        'has_verify_email' => "bool",
        'has_enable_otp' => "mixed",
        'has_enable_two_factory_auth' => "bool"
    ])]
    public function getSettingsAttribute(): array
    {
        return  [
            'has_verify_email' => $this->attributes['email_verified_at'] != null,
            'has_enable_otp' => $this->attributes['has_enable_otp'],
            'has_enable_two_factory_auth' => $this->attributes['two_factor_recovery_codes'] != null
        ];
    }

}
