<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductPurchasingPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_purchasing_prices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->double('amount');
            $table->foreignId('product_s_k_u_id')->constrained()->restrictOnDelete();
            $table->foreignId('warehouse_stock_id')->constrained()->restrictOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_purchasing_prices');
    }
}
