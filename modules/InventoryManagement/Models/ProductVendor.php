<?php

namespace Modules\InventoryManagement\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductVendor extends Model
{
    use HasFactory;

    protected $fillable = [];

    /**
     * Create a new factory instance for the model.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    protected static function newFactory()
    {
        return \Modules\InventoryManagement\Repositories\Database\Factories\ProductVendor::new();
    }
}
