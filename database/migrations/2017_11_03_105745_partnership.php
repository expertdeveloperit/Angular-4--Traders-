<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Partnership extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('partnership');
        Schema::create('partnership', function (Blueprint $table) {
            $table->increments('id');
            $table->string('organization_type');
            $table->string('bussiness_name')->unique();
            $table->string('abn');
            $table->string('customer_number');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('bussiness_address');
            $table->string('postal_address');
            $table->string('traderspec_offer');
            $table->string('dwelling_build');
            $table->rememberToken();
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
        Schema::dropIfExists('migrations');
    }
}
