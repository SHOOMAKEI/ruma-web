<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOperationYearsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operation_years', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code_name');
            $table->foreignId('company_id')->constrained()->restrictOnDelete();
            $table->timestamp('start_at');
            $table->timestamp('end_at');
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
        Schema::dropIfExists('operation_years');
    }
}
