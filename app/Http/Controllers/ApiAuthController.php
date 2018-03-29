<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use App\User;
use Mail;
<<<<<<< HEAD
use App\Forgotpassword;
use Cookie;
=======
<<<<<<< HEAD
use App\Forgotpassword;
=======
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
class ApiAuthController extends Controller
{
   
 //Authentication Process

 public function authenticate(){
 	$credentials = request()->only('email', 'password');

 	try{

 		$token = JWTAuth::attempt($credentials);

 		if(!$token){
 			return response()->json(['status' => false,'error' => 'invalid credentials'], 200);
 		}
 	}
   
   catch(JWTException $e){
       
       return response()->json(['status' => false,'error' => 'Something Went Wrong'], 200);
   }
   
<<<<<<< HEAD
        $user=User::where('email','=',  request()->only('email'))->first();

       return response()->json(['status' => true,'token' => $token, 'userdeta'=>$user], 200);
=======
<<<<<<< HEAD
        $user=User::where('email','=',  request()->only('email'))->first();

       return response()->json(['status' => true,'token' => $token, 'userdeta'=>$user], 200);
=======
       return response()->json(['status' => true,'token' => $token], 200);
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3

 }



 // Forgot PassWord


  public function ForgotPassword(Request $request){

       $user=User::where('email','=', $request->email)->first();
        
       if(count($user) == 0){
        return response()->json(["message" => "Email is not registered"]);
       }
       else{
        
        $this->sendEmail($user);
        
        return response()->json(["status" => true, "message" => "We send you a password reset link"]);
       }

  }

// Send Mail with token

  public function sendEmail($user){

<<<<<<< HEAD
     $string = "abcdefghijklmnopqrstuvwxyz".time();

     $code= str_shuffle($string);


     $deletebefore = Forgotpassword::where('email', '=', $user->email)->delete();

     $forgotpassword = new Forgotpassword(); 
=======
    $code= bcrypt($user->email);
<<<<<<< HEAD

    $forgotpassword = new Forgotpassword(); 

    $forgotpassword->fill(['email' => $user->email, 'token' => $code]);
     $forgotpassword->save();
=======
     
    $user->fill(['forgot_tokken' => $code]);

     $user->save();
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3

     $forgotpassword->fill(['email' => $user->email, 'token' => $code]);
     $forgotpassword->save();
     
      Mail::send('mail',[
        'user'=>$user,
        'code'=>$code], 
        function ($message) use ($user){
           $message->to($user->email);
           $message->subject("hello $user->name, reset your password");
<<<<<<< HEAD
      });
=======
<<<<<<< HEAD
      });
=======
        });
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
    
  }
   
   //Check user token

<<<<<<< HEAD
  public function ResetPassword(request $reequest, $token){
=======
<<<<<<< HEAD
  public function ResetPassword(request $reequest, $token){
     
     $forgotpassword = Forgotpassword::where('token', '=', $token)->first();

       if($forgotpassword->token == $token){
         exit;
            // return redirect('/form/signup');
            return response()->json(["status" => true, "message" => "redirect to change passwoprd"]);
=======
  public function ResetPassword($token){
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
     
       $forgotpassword = Forgotpassword::where('token', '=', $token)->first();

       if($forgotpassword->token == $token){

<<<<<<< HEAD
           return redirect('/form/changePassword/'.$token);  
=======
          }
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
      
       }  

     else

        {
<<<<<<< HEAD
          return response()->json(["status" => false, "message" => "Your Token Has been Expired"]);
        
=======
<<<<<<< HEAD
          return "Your Tokken Has been Expired";
=======
          echo "Your Tokken Has been Expired";
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
        }
  }


    public function ChangePassword(request $request){
    
       //

       $resetpassword=Forgotpassword::where('token','=', $request->token)->first();

       $user=User::where('email','=', $resetpassword->email)->first();

       $user->update(['password' => bcrypt($request->password)]);

       $user->save();

       if($user->save()){    

        return response()->json(["status" => true, "message" => "Password has been successfully Changed"]);

       }
       else{

        return response()->json(["status" => false, "message" => "Your Link Has been Expired"]);

       }

   }


}
