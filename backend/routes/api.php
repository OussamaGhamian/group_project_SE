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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// +--------+-----------+-----------------------------------------+-----------------------------------+---------------------------------------------------------------------------+------------+
// |        | GET|HEAD  | /                                       | generated::fsU8F09atmhpJG2V       | Closure                                                                   | web        |
// |        | POST      | api/login                               | generated::Ucx7U2odHjBAlR6g       | App\Http\Controllers\AuthController@login                                 | api        |
// |        | POST      | api/project                             | project.store                     | App\Http\Controllers\ProjectController@store                              | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/project                             | project.index                     | App\Http\Controllers\ProjectController@index                              | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | DELETE    | api/project/{project}                   | project.destroy                   | App\Http\Controllers\ProjectController@destroy                            | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | PUT|PATCH | api/project/{project}                   | project.update                    | App\Http\Controllers\ProjectController@update                             | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/project/{project}                   | project.show                      | App\Http\Controllers\ProjectController@show                               | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | POST      | api/register                            | generated::XXdHnlvwbjyW26tY       | App\Http\Controllers\AuthController@register                              | api        |
// |        | POST      | api/task                                | task.store                        | App\Http\Controllers\TaskController@store                                 | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/task                                | task.index                        | App\Http\Controllers\TaskController@index                                 | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | DELETE    | api/task/{task}                         | task.destroy                      | App\Http\Controllers\TaskController@destroy                               | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | PUT|PATCH | api/task/{task}                         | task.update                       | App\Http\Controllers\TaskController@update                                | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/task/{task}                         | task.show                         | App\Http\Controllers\TaskController@show                                  | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | oauth/authorize                         | passport.authorizations.authorize | Laravel\Passport\Http\Controllers\AuthorizationController@authorize       | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | DELETE    | oauth/authorize                         | passport.authorizations.deny      | Laravel\Passport\Http\Controllers\DenyAuthorizationController@deny        | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | POST      | oauth/authorize                         | passport.authorizations.approve   | Laravel\Passport\Http\Controllers\ApproveAuthorizationController@approve  | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | POST      | oauth/clients                           | passport.clients.store            | Laravel\Passport\Http\Controllers\ClientController@store                  | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | GET|HEAD  | oauth/clients                           | passport.clients.index            | Laravel\Passport\Http\Controllers\ClientController@forUser                | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | DELETE    | oauth/clients/{client_id}               | passport.clients.destroy          | Laravel\Passport\Http\Controllers\ClientController@destroy                | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | PUT       | oauth/clients/{client_id}               | passport.clients.update           | Laravel\Passport\Http\Controllers\ClientController@update                 | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | POST      | oauth/personal-access-tokens            | passport.personal.tokens.store    | Laravel\Passport\Http\Controllers\PersonalAccessTokenController@store     | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | GET|HEAD  | oauth/personal-access-tokens            | passport.personal.tokens.index    | Laravel\Passport\Http\Controllers\PersonalAccessTokenController@forUser   | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | DELETE    | oauth/personal-access-tokens/{token_id} | passport.personal.tokens.destroy  | Laravel\Passport\Http\Controllers\PersonalAccessTokenController@destroy   | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | GET|HEAD  | oauth/scopes                            | passport.scopes.index             | Laravel\Passport\Http\Controllers\ScopeController@all                     | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | POST      | oauth/token                             | passport.token                    | Laravel\Passport\Http\Controllers\AccessTokenController@issueToken        | throttle   |
// |        | POST      | oauth/token/refresh                     | passport.token.refresh            | Laravel\Passport\Http\Controllers\TransientTokenController@refresh        | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | GET|HEAD  | oauth/tokens                            | passport.tokens.index             | Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController@forUser | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | DELETE    | oauth/tokens/{token_id}                 | passport.tokens.destroy           | Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController@destroy | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// +--------+-----------+-----------------------------------------+-----------------------------------+---------------------------------------------------------------------------+------------+

Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');
Route::apiResource('/project', 'ProjectController')->middleware('auth:api');
Route::apiResource('/task', 'TaskController')->middleware('auth:api');
