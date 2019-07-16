import { Component, OnInit } from '@angular/core';
import {GlobalMethodsService} from '../../services/global-methods.service'

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent implements OnInit {
  
  constructor(public method: GlobalMethodsService) { }

  ngOnInit() {
 
    
  }

}
