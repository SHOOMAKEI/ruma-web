<?php

namespace Modules\InventoryManagement\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
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
        return \Modules\InventoryManagement\Database\Factories\Product::new();
    }

    public function brand(): BelongsTo
    {
        return $this->belongsTo(ProductBrand::class);
    }

    public function vendors(): BelongsToMany
    {
        return $this->belongsToMany(ProductVendor::class);
    }

    public function product_type(): BelongsTo
    {
        return $this->belongsTo(ProductType::class);
    }

    public function product_options(): HasMany
    {
        return $this->hasMany(ProductOption::class);
    }

    public function product_skus(): HasMany
    {
        return $this->hasMany(ProductSKU::class);
    }

//    public function variants()
//    {
//        return ;
//    }
}
