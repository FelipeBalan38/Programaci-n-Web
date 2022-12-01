<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    use HasFactory;

    protected $table = "pago";
    protected $fillable = [
        'nombre',
        'nombre1',
        'apellido',
        'apellido1',
        'email',
        'periodo',
        'telefono',
        'password',
        'plan',
        'activador'
    ];
}
