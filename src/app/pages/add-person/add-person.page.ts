import { Component, OnInit,ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import {PersonFormComponent} from '../../pages-components/person-form/person-form.component'
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.page.html',
  styleUrls: ['./add-person.page.scss'],
})
export class AddPersonPage implements OnInit {
  @ViewChild('holder', {read: ViewContainerRef}) holder: ViewContainerRef;
  constructor( private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const childComponent_var = this.componentFactoryResolver.resolveComponentFactory(PersonFormComponent)
    this.holder.createComponent(childComponent_var)
  }

}
