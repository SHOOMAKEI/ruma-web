<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaleZoneScopesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_zone_scopes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sale_zone_id')->constrained()->restrictOnDelete();
            $table->unsignedBigInteger('sale_zoneable_id');
            $table->string('sale_zoneable_type');
            $table->softDeletes();
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
        Schema::dropIfExists('sale_zone_scopes');
    }
}
