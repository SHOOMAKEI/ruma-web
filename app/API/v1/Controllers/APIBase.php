<?php

namespace App\API\v1\Controllers;

use App\API\v1\Traits\ApiResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Dingo\Api\Routing\Helpers;

class APIBase extends Controller
{
    use Helpers;

    use ApiResponse;
}
