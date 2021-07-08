<?php


namespace App\API\v1\Traits;
use App\Models\API\v1\APIResponseMessage;
use Carbon\Carbon;


trait ApiResponse
{
    /** <p>Return a success response message </p>
     * @param $data
     * @param string|null $message
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    protected function success($data,string $message=null,int $code=200){
        return response()->json((new APIResponseMessage('success',$code,$message,(object)$data))->toArray(),$code);
    }

    /**
     * <p>Return an error response message</p>
     * @param string $message
     * @param int $code
     * @param null $data
     * @return \Illuminate\Http\JsonResponse
     */
    protected function error(string $message,int $code,$data=null){
        return response()->json((new APIResponseMessage("error",$code,$message,(object)$data))->toArray(),$code);
    }
}
