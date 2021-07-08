<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shop_stocks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->timestamp('date_in');
            $table->timestamp('date_finished')->nullable();
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
        Schema::dropIfExists('shop_stocks');
    }
}
