<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Queja extends Model
{
    use HasFactory;

    protected $table = "queja";

    protected $fillable = [
        'telf',
        'mensage',
        'posprobl',
        'estado'
    ];
}
