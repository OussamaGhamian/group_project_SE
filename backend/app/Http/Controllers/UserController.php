<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
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
    public function userTasks(Request $request)
    {
        try {
            $user_id = $request->user_id;
            $user = User::find($user_id);
            $tasks = $user->tasks;
            if (count($tasks))
                return response()->json(['data' => $tasks, 'success' => true, 'msg' => "For user with id: $user_id, tasks have been retrieved successfully"]);
            return response()->json(['data' => [], 'success' => true, 'msg' => "For project with id: $user_id, no tasks to be retrieved"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }
    public function userTeams(Request $request)
    {
        try {
            $user_id = $request->user_id;
            $user = User::find($user_id);
            $teams = $user->teams;
            if (count($teams))
                return response()->json(['data' => $teams, 'success' => true, 'msg' => "For user with id: $user_id, teams have been retrieved successfully"]);
            return response()->json(['data' => [], 'success' => true, 'msg' => "For user with id: $user_id, no teams to be retrieved"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }
}
