<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }
    public function assignToTeam(Request $request)
    {
        $user = User::find($request->user_id);
        $user->teams()->attach($request->team_id);
    }
}
