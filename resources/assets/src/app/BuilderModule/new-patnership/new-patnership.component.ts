import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-patnership',
  templateUrl: './new-patnership.component.html',
  styleUrls: ['./new-patnership.component.css']
})
export class NewPatnershipComponent implements OnInit {

	panterdata:any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data){

  	this.panterdata = data;
  	console.log(data);

  }

}
