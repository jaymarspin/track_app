import { Component,OnInit,ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {GlobalMethodsService} from '../services/global-methods.service'
import {PersonListComponent} from '../pages-components/person-list/person-list.component'
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  add:boolean = true

@ViewChild('holder', {read: ViewContainerRef}) holder: ViewContainerRef;
  constructor(public method: GlobalMethodsService,private componentFactoryResolver: ComponentFactoryResolver) {
    
  }
  ngOnInit(){
    const childComponent_var = this.componentFactoryResolver.resolveComponentFactory(PersonListComponent)
    this.holder.createComponent(childComponent_var)
     

  }
  


}
