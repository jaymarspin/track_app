import { Component, OnInit } from '@angular/core';
import {GlobalMethodsService} from '../../services/global-methods.service'
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  fname:string
  lname:string
  contact:string

  constructor(public method: GlobalMethodsService) { }

  ngOnInit() {

    

    
  }

  submit(){
    let body = {
      fname: this.fname,
      lname: this.lname,
      contact: this.contact
    }
  
    this.method.postData(body,"add-person.php").subscribe((Response) =>{
       
      
    },(err) =>{
       
    },()=>{
       
    })
  }

}
