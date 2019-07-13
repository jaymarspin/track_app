import { Component, OnInit } from '@angular/core';
import {GlobalMethodsService} from '../../services/global-methods.service'
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  fname:string
  constructor(public method: GlobalMethodsService) { }

  ngOnInit() {

  
  }

}
