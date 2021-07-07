<?php

namespace App\API\v1\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class UserOTP extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
         return [
             "username"=>"required|string",
             'csrf_token'=>"required|string",
             'device_id'=>"required|string",
             "totp_code"=>"required"
        ];
    }
}
