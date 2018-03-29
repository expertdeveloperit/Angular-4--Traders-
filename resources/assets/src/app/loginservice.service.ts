import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class LoginserviceService {
	sharedData = new BehaviorSubject<object>({});
	currentAdmin = this.sharedData.asObservable();
  changePassEmail;
  constructor(private http:Http,private cookie:CookieService) { }
<<<<<<< HEAD
  addBuilder(obj){
=======
<<<<<<< HEAD
  addBuilder(obj){
=======
  register(obj){
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
	  return this.http.post('http://localhost:8000/api/register',obj).map(data=>
	  	data.json());
  }
  login(obj){
  	return this.http.post('http://localhost:8000/api/authenticate',obj).map(data=>data.json());
  }
  changeToken(user) {
    this.sharedData.next(user);
  }
  getUser(token){
  	let header = new Headers();
  	header.append('Authorization', token );
  	 let opts = new RequestOptions();
	  opts.headers = header;
  	return this.http.get('http://localhost:8000/api/user',opts).map((data)=>data.json());
  }
<<<<<<< HEAD
  forgotPassword(obj){
    return this.http.post('http://localhost:8000/api/forgotpassword',obj).map((data)=>data.json());
  }
  changePassword(obj){
    return this.http.post('http://localhost:8000/api/changepassword',obj).map((data)=>data.json());
  }
=======
<<<<<<< HEAD
  forgotPassword(obj){
    return this.http.post('http://localhost:8000/api/forgotpassword',obj).map((data)=>data.json());
  }
=======
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
}
