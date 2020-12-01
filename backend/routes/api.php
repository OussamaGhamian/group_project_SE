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

// | Domain | Method    | URI                                     | Name                              | Action                                                                    | Middleware |
// +--------+-----------+-----------------------------------------+-----------------------------------+---------------------------------------------------------------------------+------------+
// |        | GET|HEAD  | /                                       | generated::kAGpunhjSAC0k7e4       | Closure                                                                   | web        |
// |        | POST      | api/login                               | generated::FR1fiJn03O0YD85b       | App\Http\Controllers\AuthController@login                                 | api        |
// |        | GET|HEAD  | api/myprojects                          | generated::skwc0Kjihoue8MJD       | App\Http\Controllers\ProjectController@myProjects                         | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | POST      | api/organization                        | organization.store                | App\Http\Controllers\OrganizationController@store                         | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/organization                        | organization.index                | App\Http\Controllers\OrganizationController@index                         | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/organization/{organization}         | organization.show                 | App\Http\Controllers\OrganizationController@show                          | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | DELETE    | api/organization/{organization}         | organization.destroy              | App\Http\Controllers\OrganizationController@destroy                       | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | PUT|PATCH | api/organization/{organization}         | organization.update               | App\Http\Controllers\OrganizationController@update                        | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | POST      | api/project                             | project.store                     | App\Http\Controllers\ProjectController@store                              | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/project                             | project.index                     | App\Http\Controllers\ProjectController@index                              | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | PUT|PATCH | api/project/{project}                   | project.update                    | App\Http\Controllers\ProjectController@update                             | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | DELETE    | api/project/{project}                   | project.destroy                   | App\Http\Controllers\ProjectController@destroy                            | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/project/{project}                   | project.show                      | App\Http\Controllers\ProjectController@show                               | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | POST      | api/register                            | generated::I5FeuU28Ru1zFkrQ       | App\Http\Controllers\AuthController@register                              | api        |
// |        | GET|HEAD  | api/task                                | task.index                        | App\Http\Controllers\TaskController@index                                 | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | POST      | api/task                                | task.store                        | App\Http\Controllers\TaskController@store                                 | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | DELETE    | api/task/{task}                         | task.destroy                      | App\Http\Controllers\TaskController@destroy                               | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | PUT|PATCH | api/task/{task}                         | task.update                       | App\Http\Controllers\TaskController@update                                | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/task/{task}                         | task.show                         | App\Http\Controllers\TaskController@show                                  | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | POST      | api/team                                | team.store                        | App\Http\Controllers\TeamController@store                                 | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/team                                | team.index                        | App\Http\Controllers\TeamController@index                                 | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | PUT|PATCH | api/team/{team}                         | team.update                       | App\Http\Controllers\TeamController@update                                | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | DELETE    | api/team/{team}                         | team.destroy                      | App\Http\Controllers\TeamController@destroy                               | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/team/{team}                         | team.show                         | App\Http\Controllers\TeamController@show                                  | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/user                                | user.index                        | App\Http\Controllers\UserController@index                                 | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | POST      | api/user                                | user.store                        | App\Http\Controllers\UserController@store                                 | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | GET|HEAD  | api/user/{user}                         | user.show                         | App\Http\Controllers\UserController@show                                  | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | PUT|PATCH | api/user/{user}                         | user.update                       | App\Http\Controllers\UserController@update                                | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | DELETE    | api/user/{user}                         | user.destroy                      | App\Http\Controllers\UserController@destroy                               | api        |
// |        |           |                                         |                                   |                                                                           | auth:api   |
// |        | DELETE    | oauth/authorize                         | passport.authorizations.deny      | Laravel\Passport\Http\Controllers\DenyAuthorizationController@deny        | web        |
// |        |           |                                         |                                   |                                                                           | auth       |
// |        | GET|HEAD  | oauth/authorize                         | passport.authorizations.authorize | Laravel\Passport\Http\Controllers\AuthorizationController@authorize       | web        |
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

Route::middleware('auth:api')->group(function () {
    Route::apiResource('/user', 'UserController');
    Route::post('/userteam', 'UserController@assignToTeam');
    Route::post('/userteams', 'UserController@userTeams');
    Route::post('/usertasks', 'UserController@userTasks');

    Route::apiResource('/organization', 'OrganizationController');

    Route::apiResource('/project', 'ProjectController');
    Route::get('/myprojects', 'ProjectController@myProjects');
    Route::post('/projectteams', 'ProjectController@projectTeams');
    Route::post('/projecttasks', 'ProjectController@projectTasks');
    Route::post('/projectorganization', 'ProjectController@projectOrganization');

    Route::apiResource('/team', 'TeamController');

    Route::apiResource('/task', 'TaskController');
});
