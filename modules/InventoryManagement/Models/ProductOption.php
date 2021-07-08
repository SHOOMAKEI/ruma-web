<?php

namespace Modules\InventoryManagement\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductOption extends Model
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
        return \Modules\InventoryManagement\Database\Factories\ProductOption::new();
    }

    public function product_option_values(): HasMany
    {
        return $this->hasMany(ProductOptionValue::class);
    }

    public function product_attribute(): BelongsTo
    {
       return $this->belongsTo(ProductAttribute::class);
    }

    public function product_sku_values(): HasMany
    {
        return $this->hasMany(ProductSKUValue::class);
    }
}
