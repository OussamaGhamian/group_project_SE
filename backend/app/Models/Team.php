<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
