<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use JetBrains\PhpStorm\ArrayShape;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Modules\EmployeeManagement\Models\Employee;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Permission\Traits\HasPermissions;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail, HasMedia
{
    use HasFactory;
    use Notifiable;
    use HasRoles;
    use HasPermissions;
    use LogsActivity;
    use TwoFactorAuthenticatable;
    use InteractsWithMedia;


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
