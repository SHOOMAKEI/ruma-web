<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamp('started_at');
            $table->timestamp('ended_at');
            $table->foreignId('employee_id')->constrained()->restrictOnDelete();
            $table->foreignId('contract_definition_id')->constrained()->restrictOnDelete();
            $table->enum('status',['ON-LEAVE', 'TERMINATED', 'IN-ACTIVE', 'ACTIVE', 'SUSPENDED'])->default('ACTIVE');
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
        Schema::dropIfExists('contracts');
    }
}
