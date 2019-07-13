import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import{HeaderModule} from '../sharing/header/header.module'
import {PersonListComponent} from '../pages-components/person-list/person-list.component'
 
@NgModule({
  imports: [
    IonicModule,
    CommonModule, 
    FormsModule,
    HeaderModule,
     
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page,PersonListComponent],
  exports:[Tab2Page], 
  entryComponents:[
 
    PersonListComponent 
  ]
})
export class Tab2PageModule {}
