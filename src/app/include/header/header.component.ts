import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showAdd:any
  @Input() method:any
  constructor() { }

  ngOnInit() {
    
  }
  addPerson(){
    this.method.openPage("add-person")
  }

}
