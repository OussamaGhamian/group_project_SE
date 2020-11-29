<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Auth;
use Exception;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            //$organizations = Organization::all();
            $organizations=auth()->user->organizations();
            if (count($organizations))
                return response()->json(['data' => $organizations, 'success' => true, 'msg' => "Organiztions have been retrieved successfully"]);
            return response()->json(["data" => [], 'success' => true, 'msg' => 'No ognizations to be retrieved']);
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
        $owner_id=Auth::user()->id;
        try {
            $organization = Organization::create($request->validate([
                'name' => 'required',
                 'owner_id'=>$owner_id,
            ]));
            return response()->json(["data" => $organization, "success" => true, 'msg' => 'Organization has been added successfully']);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function show(Organization $organization)
    {
        try {
            return response()->json(["data" => $organization, 'success' => true, 'msg' => "Task with id: {$organization->id} has been retrieved successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Organization $organization)
    {
        try {
            $request['name'] = $request['name'] ?? $organization->name;
            $request['owner_id'] = $request['owner_id'] ?? $organization->name;
            $updated = $organization->update($request->validate([
                'name' => 'required',
                'owner_id'=>'required',
            ]));
            if ($updated)
                return response(['data' => $organization, 'success' => true, 'msg' => "Organization  with id: {$organization->id} has been updated"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function destroy(Organization $organization)
    {
        try {
            if ($organization->delete())
                return response()->json(['data' => [], "success" => true, 'msg' => "Organization with id: {$organization->id} has been deleted successfully"]);
        } catch (Exception $ex) {
            return response()->json(["data" => [], 'success' => false, 'msg' => "Internal server error: {$ex->getMessage()}"], 500);
        }
    }
}
