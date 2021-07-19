<?php

namespace App\Exceptions;

use App\Models\API\v1\APIResponseMessage;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        $class = get_class($exception);
        switch ($class) {
            case 'Dingo\Api\Exception\ValidationHttpException':
                if ($request->expectsJson())
                    return $this->errorRespond($exception->getErrors()->first(), $exception->getStatusCode());
                break;
            default:
                if ($request->expectsJson())
                    Return $this->errorRespond ('System Reset', 500);

        break;
        }
        return parent::render($request, $exception);
    }

    private function errorRespond($first, $getStatusCode)
    {
        print_r($first);
        print_r($getStatusCode);
        die();
        return new APIResponseMessage();
    }
}
