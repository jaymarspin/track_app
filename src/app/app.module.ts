import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import {HeaderModule} from './sharing/header/header.module'
import {HttpModule } from '@angular/http'
import { HttpClient,HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HeaderModule,
    HttpModule,
    BrowserModule, IonicModule.forRoot({
      animated: false // disable animation
  }), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
   
    HttpClient,HttpClientModule,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
