import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddPersonPage } from './add-person.page';
import{HeaderModule} from '../../sharing/header/header.module'
import {PersonFormComponent} from '../../pages-components/person-form/person-form.component'
const routes: Routes = [
  {
    path: '',
    component: AddPersonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddPersonPage,PersonFormComponent],
  entryComponents:[
    PersonFormComponent
  ],exports:[
    AddPersonPage
  ]
})
export class AddPersonPageModule {}
