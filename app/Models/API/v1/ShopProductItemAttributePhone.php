<?php


namespace App\Models\API\v1;


class ShopProductItemAttributePhone
{
    public string $network ;
    public string $os;
    public string $model;
    public string $brand;
    public string $launch;
    public string $platorm;
    public string $memory;
    public string $mainCamera;
    public string $selfieCamera;
    public string $sound;
    public ?string $featuers;
    public ?string  $sensors;
    public ?string $communications;
    public string $sn;
    public string $sku;
    public ?string $dateReleased;

    /**
     * ShopProductItemAttributePhone constructor.
     * @param string $network
     * @param string $os
     * @param string $model
     * @param string $brand
     * @param string $launch
     * @param string $platorm
     * @param string $memory
     * @param string $mainCamera
     * @param string $selfieCamera
     * @param string $sound
     * @param string $features
     * @param string $sensors
     * @param string $communications
     * @param string $sn
     * @param string $sku
     * @param string $dateReleased
     */
    public function __construct($network, $os, $model, $brand, $launch,
                                $platform, $memory, $mainCamera, $selfieCamera,
                                $sound,$sn, $sku, $features=null, $sensors=null, $communications=null,
                                 $dateReleased=null)
    {
        $this->network = $network;
        $this->os = $os;
        $this->model = $model;
        $this->brand = $brand;
        $this->launch = $launch;
        $this->platform = $platform;
        $this->memory = $memory;
        $this->mainCamera = $mainCamera;
        $this->selfieCamera = $selfieCamera;
        $this->sound = $sound;
        $this->features = $features;
        $this->sensors = $sensors;
        $this->communications = $communications;
        $this->sn = $sn;
        $this->sku = $sku;
        $this->dateReleased = $dateReleased;
    }
}
