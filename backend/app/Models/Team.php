<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function orgnization(){
        return $this->belongsTo(Organization::class);
    }

    // public function projects(){
    //     return $this->hasMany(Project::class);
    // }


    // if we want to know the team users , if so , we have to put the user_id as a foreign key in team table
    public function users(){
        return $this->hasMany(User::class);
    }
       
}
