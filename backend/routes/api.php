<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// +--------+-----------+-----------------------+-----------------------------+------------------------------------------------+------------+
// | Domain | Method    | URI                   | Name                        | Action                                         | Middleware |
// +--------+-----------+-----------------------+-----------------------------+------------------------------------------------+------------+
// |        | GET|HEAD  | /                     | generated::3blJsEKa7OVyopFb | Closure                                        | web        |
// |        | GET|HEAD  | api/project           | project.index               | App\Http\Controllers\ProjectController@index   | api        |
// |        | POST      | api/project           | project.store               | App\Http\Controllers\ProjectController@store   | api        |
// |        | GET|HEAD  | api/project/{project} | project.show                | App\Http\Controllers\ProjectController@show    | api        |
// |        | PUT|PATCH | api/project/{project} | project.update              | App\Http\Controllers\ProjectController@update  | api        |
// |        | DELETE    | api/project/{project} | project.destroy             | App\Http\Controllers\ProjectController@destroy | api        |
// |        | GET|HEAD  | api/task              | task.index                  | App\Http\Controllers\TaskController@index      | api        |
// |        | POST      | api/task              | task.store                  | App\Http\Controllers\TaskController@store      | api        |
// |        | GET|HEAD  | api/task/{task}       | task.show                   | App\Http\Controllers\TaskController@show       | api        |
// |        | PUT|PATCH | api/task/{task}       | task.update                 | App\Http\Controllers\TaskController@update     | api        |
// |        | DELETE    | api/task/{task}       | task.destroy                | App\Http\Controllers\TaskController@destroy    | api        |
// |        | GET|HEAD  | api/user              | generated::wl87F4pwRBIRM5rO | Closure                                        | api        |
// |        |           |                       |                             |                                                | auth:api   |
// +--------+-----------+-----------------------+-----------------------------+------------------------------------------------+------------+
Route::apiResource('/project', 'ProjectController');
Route::apiResource('/task', 'TaskController');
