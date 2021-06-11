<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyOperationYearsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_operation_years', function (Blueprint $table) {
            $table->boolean('is_current')->default(false);
            $table->foreignId('company_id')->constrained()->restrictOnDelete();
            $table->foreignId('operation_year_id')->constrained()->restrictOnDelete();
            $table->primary(['operation_year_id', 'company_id']);
        });

        Schema::table('operation_years', function (Blueprint $table) {
            $table->dropForeign(['company_id']);
            $table->dropColumn('company_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_operation_years');
    }
}
