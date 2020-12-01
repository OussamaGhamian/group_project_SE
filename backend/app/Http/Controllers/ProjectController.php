<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Exception;
use Illuminate\Http\Request;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $projects = Project::all();
            if (count($projects))
                return response()->json(["data" => $projects, 'success' => true, 'msg' => 'Projects have been retrieved successfully']);
            return response()->json(["data" => [], 'success' => true, 'msg' => 'No projects to be retrieved']);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $project = Project::create($request->validate([
                'title' => 'required',
                'description' => 'required',
                'organization_id' => 'required',
                'due_date' => 'required'
            ]));
            if ($project)
                return response()->json(["data" => $project, 'success' => true, 'msg' => 'Project has been added successfully']);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        try {
            if ($project)
                return response()->json(["data" => $project, 'success' => true, 'msg' => "Project with id: {$project->id} has been retrieved successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        try {
            $request['title'] = $request['title'] ?? $project->title;
            $request['description'] = $request['description'] ?? $project->description;
            $request['due_date'] = $request['due_date'] ?? $project->due_date;
            $proj = $project->update($request->validate([
                'title' => 'required',
                'description' => 'required',
                'due_date' => 'required'
            ]));
            if ($proj)
                return response()->json(["data" => $project, 'success' => true, 'msg' => "Project with id: {$project->id} has been updated successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        try {
            if ($project->delete())
                return response()->json(['data' => [], "success" => true, 'msg' => "Project with id: {$project->id} has been deleted successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    public function myProjects()
    {
        try {
            $user = auth()->user();
            // get a certain user's teams
            $teams = $user->teams;
            $projects = [];
            // get the what projects are assigned to each team that the user is a part of
            foreach ($teams as $team) {
                $projects = $team->projects;
            }
            if (count($projects))
                return response()->json(['data' => $projects, 'success' => true, 'msg' => "Projects for user with id: $user->id have been retrieved successfully "]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }
    public function projectTasks(Request $request)
    {
        try {
            $project_id = $request->project_id;
            $project = Project::find($project_id);
            $tasks = $project->tasks;
            if (count($tasks))
                return response()->json(['data' => $tasks, 'success' => true, 'msg' => "For project with id: $project_id, tasks have been retrieved successfully"]);
            return response()->json(['data' => [], 'success' => true, 'msg' => "For project with id: $project_id, no tasks to be retrieved"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }
    public function projectTeams(Request $request)
    {
        try {
            $project_id = $request->project_id;
            $project = Project::find($project_id);
            $teams = $project->teams;
            if (count($teams))
                return response()->json(['data' => $teams, 'success' => true, 'msg' => "For project with id: $project_id, teams have been retrieved successfully"]);
            return response()->json(['data' => [], 'success' => true, 'msg' => "For project with id: $project_id, no teams to be retrieved"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }
    public function projectOrganization(Request $request)
    {
        try {
            $project_id = $request->project_id;
            $project = Project::find($project_id);
            $organization = $project->organization;
            if (isset($organization))
                return response()->json(['data' => $organization, 'success' => true, 'msg' => "For project with id: $project_id, organization have been retrieved successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }
}
