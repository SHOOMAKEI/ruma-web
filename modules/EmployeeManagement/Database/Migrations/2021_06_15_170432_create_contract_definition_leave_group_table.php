<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContractDefinitionLeaveGroupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contract_definition_leave_group', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('contract_definition_id')->constrained()->restrictOnDelete();
            $table->foreignId('leave_group_id')->constrained()->restrictOnDelete();
            $table->integer('number_of_times')->default(1);
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
        Schema::dropIfExists('contract_definition_leave_group');
    }
}
