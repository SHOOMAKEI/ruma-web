<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_devices', function (Blueprint $table) {
            $table->id();
            $table->string("device_name","255");
            $table->string("device_id",'244');
            $table->boolean("device_status")->default(false);
            $table->string("device_os","355");
            $table->string('device_os_version',"244");
            $table->string("device_os_id","255");
            $table->foreignId("user_id")->constrained("users")->onUpdate('cascade')->onDelete("cascade");

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
        Schema::dropIfExists('user_devices');
    }
}
