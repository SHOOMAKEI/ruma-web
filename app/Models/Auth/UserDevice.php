<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDevice extends Model
{
    use HasFactory;

    protected $fillable = [
        'device_id',
        'user_id',
        "device_os",
        "device_os_id",
        'device_name',
        'device_os_version',
        'device_token'
    ];
}
