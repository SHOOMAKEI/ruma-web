<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('id_number')->unique();
            $table->string('surname');
            $table->string('other_name');
            $table->string('gender','10');
            $table->string('email')->unique();
            $table->string('mobile_number')->unique();
            $table->string('alternative_email')->nullable();
            $table->string('alternative_mobile_number')->nullable();
            $table->foreignId('region_id')->constrained()->restrictOnDelete();
            $table->string('location');
            $table->string('position');
            $table->string('address');
            $table->date('resumption_date');
            $table->date('due_date');
            $table->date('date_of_birth');
            $table->enum('job_status',['TERMINATED', 'IN-ACTIVE', 'ACTIVE', 'SUSPENDED'])->default('ACTIVE');
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
        Schema::dropIfExists('employees');
    }
}
