<?php

namespace App\Exceptions;

use Exception;
use JetBrains\PhpStorm\ArrayShape;
use Nuwave\Lighthouse\Exceptions\RendersErrorsExtensions;

class ValidationException extends Exception implements RendersErrorsExtensions
{




    public function __construct( string $message,public string | array $reason)
    {
        parent::__construct($message);

    }


    public function isClientSafe(): bool
    {
       return true;
    }

    public function getCategory(): string
    {
        return 'validation';
    }

    #[ArrayShape([
        'some' => "string",
        'reason' => "array|string"])]
    public function extensionsContent(): array
    {
        return [
            'some' => 'validation errors',
            'reason' => $this->reason,
        ];
    }
}
