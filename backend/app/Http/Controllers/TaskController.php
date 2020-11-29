<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Exception;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $tasks = Task::all();
            if (count($tasks))
                return response()->json(['data' => $tasks, 'success' => true, 'msg' => "Tasks have been retrieved successfully"]);
            return response()->json(["data" => [], 'success' => true, 'msg' => 'No tasks to be retrieved']);
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
            $task = Task::create($request->validate([
                'title' => 'required',
                'description' => 'required',
                "user_id" => 'required',
                "project_id" => 'required',
                'is_done' => 'required',
                'due_date' => 'required',
            ]));
            return response()->json(["data" => $task, "success" => true, 'msg' => 'Task has been added successfully']);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        try {
            return response()->json(["data" => $task, 'success' => true, 'msg' => "Task with id: {$task->id} has been retrieved successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        try {
            $request['title'] = $request['title'] ?? $task->title;
            $request['description'] = $request['description'] ?? $task->description;
            $request['user_id'] = $request['user_id'] ?? $task->user_id;
            $request['project_id'] = $request['project_id'] ?? $task->project_id;
            $request['is_done'] = $request['is_done'] ?? $task->is_done;
            $request['due_date'] = $request['due_date'] ?? $task->due_date;
            $updated = $task->update($request->validate([
                'title' => 'required',
                'description' => 'required',
                "user_id" => 'required',
                "project_id" => 'required',
                'is_done' => 'required',
                'due_date' => 'required',
            ]));
            if ($updated)
                return response(['data' => $task, 'success' => true, 'msg' => "Task with id: {$task->id} has been updated"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        try {
            if ($task->delete())
                return response()->json(['data' => [], "success" => true, 'msg' => "Project with id: {$task->id} has been deleted successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }
}
