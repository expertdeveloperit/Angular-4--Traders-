<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use App\User;
use App\Usermeta;
class CreateUserController extends Controller
{

//Registration Process 

 public function registration(request $request){


 	    $newusers = new User();
<<<<<<< HEAD

        if (User::where('email', '=', $request->email)->exists()) {
          return response()->json(['status' => false, 'message'=> 'Email allready exists'], 200);
        }
        else{
            $newusers->fill([
                'name' => $request->name,
                'email'=> $request->email,
                'password'=> bcrypt($request->password)
            ]);
           
            $newusers->save();
       
            $userrole = new usermeta();
            $userrole->role = $request->role;
            $newusers->usermeta()->save($userrole);
            return response()->json(['status' => true], 200);
        }
    }
=======
<<<<<<< HEAD

        if (User::where('email', '=', $request->email)->exists()) {
          return response()->json(['status' => false, 'message'=> 'Email allready exists'], 200);
        }
        else{
            $newusers->fill([
                'name' => $request->name,
                'email'=> $request->email,
                'password'=> bcrypt($request->password)
            ]);
           
            $newusers->save();
       
            $userrole = new usermeta();
            $userrole->role = $request->role;
            $newusers->usermeta()->save($userrole);
            return response()->json(['status' => true], 200);
        }
    }
=======
    
        $newusers->fill([
            'name' => $request->name,
            'email'=> $request->email,
            'password'=> bcrypt($request->password),
            'forgot_tokken'=> bcrypt($request->email)

        ]);

        $newusers->save();
        $userroll = new usermeta();
        $userroll->role = $request->role;
        $newusers->usermeta()->save($userroll);
        
        return response()->json(['status' => true], 200);
 }

>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
}
