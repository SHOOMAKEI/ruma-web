<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeopoliticalZonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('geopolitical_zones', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code_name');
            $table->foreignId('country_id')->constrained()->restrictOnDelete();
            $table->double('longitude')->nullable();
            $table->double('latitude')->nullable();
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
        Schema::dropIfExists('geopolitical_zones');
    }
}
