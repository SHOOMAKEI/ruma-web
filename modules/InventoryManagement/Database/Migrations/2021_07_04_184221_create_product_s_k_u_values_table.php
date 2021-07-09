<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductSKUValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_s_k_u_values', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('product_s_k_u_id')->constrained()->restrictOnDelete();
            $table->foreignId('product_option_id')->constrained()->restrictOnDelete();
            $table->foreignId('product_option_value_id')->constrained()->restrictOnDelete();

            $table->primary(['product_s_k_u_id', 'product_option_id', 'product_option_value_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_s_k_u_values');
    }
}
