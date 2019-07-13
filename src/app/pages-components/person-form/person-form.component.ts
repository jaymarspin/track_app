import { Component, OnInit } from '@angular/core';
import {GlobalMethodsService} from '../../services/global-methods.service'
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  sample:string
  constructor(public method: GlobalMethodsService) { }

  ngOnInit() {

    let data = {
      sample: "awdawd"
    }
    this.method.postData(data,"add-person.php").subscribe(Response =>{
      let res = Response.json()
      this.sample = res[0].sample
    })
  }

}
