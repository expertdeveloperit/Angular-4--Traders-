import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {LoginserviceService} from '../loginservice.service';
import {CookieService} from 'ngx-cookie-service';
=======
<<<<<<< HEAD
import {LoginserviceService} from '../loginservice.service';
=======

>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

<<<<<<< HEAD
  constructor(private service:LoginserviceService,private cookie:CookieService) { }
=======
<<<<<<< HEAD
  constructor(private service:LoginserviceService) { }
=======
  constructor() { }
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3

  ngOnInit() {
  }

<<<<<<< HEAD
  forgot(obj){
  	this.service.forgotPassword(obj).subscribe((data)=>{
  		this.service.changePassEmail = obj.email;
      console.log('email lock');
  	})
  }
=======
<<<<<<< HEAD
  forgot(obj){
  	this.service.forgotPassword(obj).subscribe((data)=>{
  		console.log(data,'forgotpassowrd reply from server');
  	})
  }
=======
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
}
