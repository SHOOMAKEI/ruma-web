<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_sales', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('shop_stock_product_item_id')->constrained()->restrictOnDelete();
            $table->foreignId('product_selling_price_id')->constrained()->restrictOnDelete();
            $table->double('amount');
            $table->integer('discount_percent')->nullable();
            $table->integer('incentive_percent')->nullable();
            $table->foreignId('employee_id')->constrained()->restrictOnDelete();
            $table->foreignId('shop_id')->constrained()->restrictOnDelete();
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
        Schema::dropIfExists('shop_sales');
    }
}
