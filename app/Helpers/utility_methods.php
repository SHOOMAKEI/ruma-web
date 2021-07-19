<?php

use App\Models\User;
use App\Utilities\Menu;
use Carbon\Traits\Creator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use JetBrains\PhpStorm\ArrayShape;
use Spatie\Activitylog\Facades\CauserResolver;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;
use Spatie\MediaLibrary\MediaCollections\Exceptions\InvalidBase64Data;

if (!function_exists('respondWithErrors')) {
    #[ArrayShape([
        'success' => "false",
        'errors' => "array"])]
    function respondWithErrors(array | string $validator):array
    {
        $index = 0;
        $data = [];

        if(is_array($validator)){
            foreach ($validator as $message){
                $data[$index]['message'] = $message;
                $index++;
            }
        }

        if(is_string($validator)){
            $data = [[
                'message' => $validator
            ]];
        }

        return [
            'success' => false,
            'errors' => $data
        ];
    }
}

if (!function_exists('mainMenu')) {

    function mainMenu()
    {
        return app('mainMenu');

    }
}

if (!function_exists('user')) {

    function user()
    {
        return User::find(auth()->user()->id);
    }
}
if (!function_exists('getLastIdNumberCount')) {

    function getLastIdNumberCount()
    {
        return User::find(auth()->user()->id);
    }
}

if (!function_exists('respondWithSuccess')) {

    function respondWithSuccess(string $type, mixed $data):array
    {


        return [
            $type => $data,
            'success' => true,
            'errors' => null,
        ];
    }
}

if(!function_exists('getActivityCauser')) {

    function getActivityCauser(): \Spatie\Activitylog\CauserResolver
    {
        return CauserResolver::setCauser(User::find(auth()->user()->id));
    }
}

if(!function_exists('getJobStatuses')) {

    function getJobStatuses(): array
    {
        return [
            ['name' => JOB_STATUS_ACTIVE],
            ['name' => JOB_STATUS_IN_ACTIVE],
            ['name' => JOB_STATUS_ON_LEAVE],
            ['name' => JOB_STATUS_TERMINATED],
            ['name' => JOB_STATUS_SUSPENDED],
        ];
    }
}

if(!function_exists('getContractType')) {

    function getContractType(): array
    {
        return [
            ['name' => EMPLOYMENT_STATUS_FULL_TIME],
            ['name' => EMPLOYMENT_STATUS_PART_TIME],
            ['name' => EMPLOYMENT_STATUS_PROBATION_PERIOD],
        ];
    }
}

if(!function_exists('insertForgotPasswordUserToDatabase')) {

    function insertForgotPasswordUserToDatabase(User $user): string
    {
        $key = app('config')['app.key'];

        if (Str::startsWith($key, 'base64:')) {
            $key = base64_decode(substr($key, 7));
        }

        $email = $user->username;

        DB::table('password_resets')->where('email', $user->username)->delete();

        $token = hash_hmac('sha256', Str::random(40), $key);

        DB::table('password_resets')->insert(forgotPasswordPayload($email, $token));

        return $token;
    }
}

if(!function_exists('forgotPasswordPayload')) {

    #[ArrayShape([
        'email' => "string",
        'token' => "mixed",
        'created_at' => "\Carbon"])]
    function forgotPasswordPayload(string $email, string $token): array
    {
        return ['email' => $email, 'token' => app('hash')->make($token), 'created_at' => new Carbon];
    }
}

if(!function_exists('uploadBase64Image')) {


    function uploadBase64Image(Model | HasMedia $model, string $collection_name, string $image, bool $delete_previous_collection = false): ?array
    {
        $explode = explode(',', $image);
        $format = str_replace(
            [
                'data:image/',
                ';',
                'base64',
            ],
            [
                '', '', '',
            ],
            $explode[0]
        );

        if($delete_previous_collection){

            $model->clearMediaCollection($collection_name);

        }

        try {
            $model->addMediaFromBase64($image, 'image/' . $format)
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    sha1(rand(111111, 999999)) . '-' . Carbon::now()->timestamp. '.' . $format
                ))
                ->toMediaCollection($collection_name);
        } catch (FileDoesNotExist | FileIsTooBig | InvalidBase64Data | FileCannotBeAdded $e) {
            return respondWithErrors('there was an error during file upload');
        }

        return null;
    }

}

if(!function_exists('uploadBase64FileOtherThanImage')) {


    function uploadBase64FileOtherThanImage(Model | HasMedia $model, string $collection_name, string $file, bool $delete_previous_collection = false)
    {
        $file_format = 'pdf';
        $explode = explode(',', $file);
        $format = str_replace(
            [
                'data:application/',
                ';',
                'base64',
            ],
            [
                '', '', '',
            ],
            $explode[0]
        );

        if($delete_previous_collection){

            $model->clearMediaCollection($collection_name);

        }

        try {

            if(!str_contains('pdf',$format))
            {
                $file_format = 'xlsx';
            }

            $model->addMediaFromBase64($file, 'application/' . $format)
                ->usingFileName(str_replace(
                    ' ',
                    '-',
                    sha1(rand(111111, 999999)) . '-' . Carbon::now()->timestamp. '.' . $file_format
                ))
                ->toMediaCollection($collection_name);
        } catch (FileDoesNotExist | FileIsTooBig | InvalidBase64Data | FileCannotBeAdded $e) {
            return $e;
        }

        return null;
    }

}

