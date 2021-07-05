<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopStockProductItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_stock_product_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('product_s_k_u_value_id')->constrained()->restrictOnDelete();
            $table->foreignId('shop_stock_id')->constrained()->restrictOnDelete();
            $table->enum('current_status', ['ALIVE', 'DOA', 'DAP'])->default('ALIVE');
            $table->integer('incentive_percent')->nullable();
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
        Schema::dropIfExists('shop_stock_product_items');
    }
}
