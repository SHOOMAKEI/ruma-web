<?php


namespace App\Models\API\v1;


class APIResponseMessage
{

    public function __construct( protected string $status,protected string $statuscode, protected string $message, protected Object|null $data){

    }
    /**
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * @param string $status
     */
    public function setStatus(string $status): void
    {
        $this->status = $status;
    }

    /**
     * @return string
     */
    public function getMessage(): string
    {
        return $this->message;
    }

    /**
     * @param string $message
     */
    public function setMessage(string $message): void
    {
        $this->message = $message;
    }

    /**
     * @return Object
     */
    public function getData(): object
    {
        return $this->data;
    }

    public function toArray()
    {
        return ['status'=>$this->status,"status_code"=>$this->statuscode,'message'=>$this->message,'data'=>$this->data];
    }


}
