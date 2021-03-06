<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Auth;
use Exception;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $teams = Team::all();
            //$teams = auth()->user()->organizations->teams();
            if (count($teams))
                return response()->json(['data' => $teams, 'success' => true, 'msg' => "Teams have been retrieved successfully"]);
            return response()->json(["data" => [], 'success' => true, 'msg' => 'No teams to be retrieved']);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            // provide in your request the project for newly created team
            $team = Team::create($request->validate([
                'name' => 'required',
                'organization_id' => 'required',
            ]));
            // adding a record in team_project table 
            $team->projects()->attach($request->project_id);
            return response()->json(["data" => $team, "success" => true, 'msg' => 'Team has been added successfully']);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        try {
            return response()->json(["data" => $team, 'success' => true, 'msg' => "Team with id: {$team->id} has been retrieved successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Team $team)
    {
        try {
            $request['name'] = $request['name'] ?? $team->name;
            $request['organization_id'] = $request['organization_id'] ?? $team->organization_id;
            $updated = $team->update($request->validate([
                'name' => 'required',
                'organization_id' => 'required',
            ]));
            if ($updated)
                return response(['data' => $team, 'success' => true, 'msg' => "Team with id: {$team->id} has been updated"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy(Team $team)
    {
        try {
            if ($team->delete())
                return response()->json(['data' => [], "success" => true, 'msg' => "Team with id: {$team->id} has been deleted successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    public function teamOrganization(Request $request)
    {
        try {
            $team_id = $request->team_id;
            $team= Team::find($team_id);
            $organization = $team->organization;
            if ($organization)
                return response()->json(['data' => $organization, 'success' => true, 'msg' => "For team with id: $team_id, it belong to this organization"]);
            return response()->json(['data' => [], 'success' => true, 'msg' => "For team with id: $team_id,doesn't belong to any organization"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    public function teamProjects(Request $request)
    {
        try {
            $team_id = $request->team_id;
            $team= Team::find($team_id);
            $projects = $team->projects;
            if ($projects)
                return response()->json(['data' => $projects, 'success' => true, 'msg' => "For team with id: $team_id, Projects have been retrieved successfully "]);
            return response()->json(['data' => [], 'success' => true, 'msg' => "For team with id: $team_id,There is no projects for this team"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    public function teamUsers(Request $request)
    {
        try {
            $team_id = $request->team_id;
            $team= Team::find($team_id);
            $users = $team->users;
            if ($users)
                return response()->json(['data' => $users, 'success' => true, 'msg' => "For team with id: $team_id, Users have been retrieved successfully "]);
            return response()->json(['data' => [], 'success' => true, 'msg' => "For team with id: $team_id,There is no one in this team"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

  


}
