<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class aviso extends Model
{
    protected $table = "avisos";
    use HasFactory;
    protected $fillable = [
        'titulo',
        'nota',
    ];
}
