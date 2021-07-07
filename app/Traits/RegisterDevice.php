<?php
namespace App\Traits;

use App\Models\Auth\UserDevice;

trait RegisterDevice {

    public function registerMobileDevice($deviceID,$deviceName,
    $deviceOSID,$deviceOSName,$userID){
        return UserDevice::updateOrCreate(
            ['user_id'=>$userID,'device_id'=>$deviceID,'device_name'=>$deviceName],
            ['device_os'=>$deviceOSID,'device_os_id'=>$deviceOSID,'device_os_version'=>$deviceName,
                'auth_token']
        );
    }

    public function generateDeviceToken($deviceID){
        return password_hash($deviceID);
    }
}
