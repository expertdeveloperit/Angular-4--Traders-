<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usermeta extends Model
{
    public $timestamps = false;
	protected $table = "usermeta";
    protected $fillable = ['role',];
}
