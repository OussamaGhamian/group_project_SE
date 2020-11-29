<?php

namespace App\Http\Controllers;

use App\Models\User;
use Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'f_name' => 'required|max:20',
            'l_name' => 'required|max:20',
            'email' => 'email|required|unique:users',
            'password' => 'required|confirmed'
        ]);
        $validatedData['password'] = bcrypt($request->password);
        $user = User::create($validatedData);
        $accessToken = $user->createToken('authToken')->accessToken;
        return response()->json(['user' => $user, 'accessToken' => $accessToken]);
    }
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if (!Auth::attempt($validatedData)) {
            return response()->json(['msg' => 'invalid credentials']);
        }
        $user = auth()->user();
        return response()->json(['user' => $user, 'accessToken' => $user->createToken('authToken')->accessToken]);
    }
}
