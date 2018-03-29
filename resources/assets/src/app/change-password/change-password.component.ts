import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service:LoginserviceService,private route:ActivatedRoute,private router:Router) { }
  sub
  token;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.token = params['token'];
       console.log(this.token);
     });
  }
  changePassword(obj){
    obj.email = this.service.changePassEmail;
    obj.token = this.token;
  	this.service.changePassword(obj).subscribe((data)=>{
  		if(data.status){
        this.router.navigateByUrl('/')
      }
  		console.log(data,'password changed');
  	})
  }
}
