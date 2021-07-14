<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttendancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//        Schema::create('attendances', function (Blueprint $table) {
//            $table->bigIncrements('id');
//            $table->timestamp('log_at');
//            $table->enum('action_type',['SIGN-IN', 'SIGN-OUT']);
//            $table->foreignId('employee_id')->constrained()->restrictOnDelete();
//            $table->timestamps();
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//        Schema::dropIfExists('attendances');
    }
}
