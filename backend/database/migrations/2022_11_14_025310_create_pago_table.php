<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pago', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('nombre1');
            $table->string('apellido1');
            $table->string('apellido');
            $table->string('email');
            $table->string('periodo');
            $table->string('telefono');
            $table->string('password');
            $table->string('plan');
            $table->string('activador');
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
        Schema::dropIfExists('pago');
    }
}
