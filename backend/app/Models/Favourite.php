<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    use HasFactory;

    protected $fillable = [
        'bookId',
        'userId',
        'volumeInfo'
    ];

    protected $hidden = [
        'updated_at'
    ];

    protected $casts = [
        'volumeInfo' => 'json'
    ];
}
