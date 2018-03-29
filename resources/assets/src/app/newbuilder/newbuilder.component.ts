import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {LoginserviceService} from '../loginservice.service';
=======
<<<<<<< HEAD
import {LoginserviceService} from '../loginservice.service';
=======

>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
@Component({
  selector: 'app-newbuilder',
  templateUrl: './newbuilder.component.html',
  styleUrls: ['./newbuilder.component.css']
})
export class NewbuilderComponent implements OnInit {

<<<<<<< HEAD
  constructor(private service:LoginserviceService) { }
=======
<<<<<<< HEAD
  constructor(private service:LoginserviceService) { }

  ngOnInit() {
  }
  addBuilder(obj){
  	console.log(obj,'data send to create builder route');
  	this.service.addBuilder(obj).subscribe((data)=>{
  		if(data){
  			console.log(data,'builder created')
  		}
  		else{
  			console.log(data,'email already exist');
  		}

  	})
  }
=======
  constructor() { }
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3

  ngOnInit() {
  }
  addBuilder(obj){
  	console.log(obj,'data send to create builder route');
  	this.service.addBuilder(obj).subscribe((data)=>{
  		if(data){
  			console.log(data,'builder created')
  		}
  		else{
  			console.log(data,'email already exist');
  		}

<<<<<<< HEAD
  	})
  }
=======
>>>>>>> 85b44be30d11381b677023b2da36512ae42ab7d9
>>>>>>> 5d73908b104f154875feef42f5300745c98e39c3
}
