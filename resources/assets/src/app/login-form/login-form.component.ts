import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  erroStatus=false;
  errMsg;
  currentAdmin;
  token;
  constructor(private service:LoginserviceService, private rotuer:Router, private cookie:CookieService) { }

  ngOnInit() {
    if(this.cookie.check('currentAdmin')){
      this.rotuer.navigateByUrl('/dashboard');
    }
    else{
      console.log('go back')
      this.rotuer.navigateByUrl('/');
    }
  }
  login(obj){
  	this.service.login(obj).subscribe((data)=>{

      console.log(data)
      if(data.status){
        this.erroStatus = false;
        if(data.token){
          console.log('with token');
          this.service.getUser("Bearer "+data.token).subscribe((data)=>{
            console.log('with user');
            this.currentAdmin = data;
            this.currentAdmin.token = data.token;
            this.cookie.set('currentAdmin',JSON.stringify(this.currentAdmin));
            // this.service.changeToken(this.currentAdmin);
            this.rotuer.navigateByUrl('/dashboard');
          });
        }
      }
      else{
        console.log('without token and user');
        this.erroStatus = true;
        this.errMsg = data.error;
      }
  	})
  }
}