<?php

namespace Modules\InventoryManagement\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductAttribute extends Model
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
        return \Modules\InventoryManagement\Database\Factories\ProductAttribute::new();
    }

    public function attributes_categories(): BelongsTo
    {
        return $this->belongsTo(ProductAttributeCategory::class);
    }

    public function product_type(): BelongsTo
    {
        return $this->belongsTo(ProductType::class);
    }


}
