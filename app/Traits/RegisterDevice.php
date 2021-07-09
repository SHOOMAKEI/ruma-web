<?php
namespace App\Traits;

use App\Models\Auth\UserDevice;

trait RegisterDevice {

    public function registerMobileDevice($deviceID,$deviceName,
    $deviceOSID,$deviceOSName,$userID,$token){
        return UserDevice::updateOrCreate(
            ['user_id'=>$userID,'device_id'=>$deviceID,'device_name'=>$deviceName],
            ['device_os'=>$deviceOSID,'device_os_id'=>$deviceOSID,'device_os_version'=>$deviceName,
                'device_token'=>$token]
        );
    }

    public function updateDeviceToken($deviceID,$userID,$token){
        return UserDevice::updateOrCreate(
            ['user_id'=>$userID,'device_id'=>$deviceID],['device_token'=>$token]
        );
    }

    public function generateDeviceToken($deviceID){
        return password_hash($deviceID,PASSWORD_DEFAULT);
    }

    public function validDeviceToken($token,$device_id){
        return UserDevice::where(["device_token"=>$token,'device_id'=>$device_id])->count() >= 1;
    }
}
