import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:LoginserviceService) { }

  ngOnInit() {
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
  addBuilder(obj){
    console.log(obj,'data send to create builder route');
    this.service.addBuilder(obj).subscribe((data)=>{
      console.log(data,'reply from server');
    })
<<<<<<< HEAD
=======
=======
  signup(obj){
  	console.log('in signup');
  	this.service.register(obj).subscribe((data)=>{console.log(data)});
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
  }
}
