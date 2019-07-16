import { Injectable } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import {NavController  } from '@ionic/angular'
import {Http, Headers, RequestOptions} from '@angular/http'
import "rxjs"
 
@Injectable({
  providedIn: 'root'
})
export class GlobalMethodsService {
  options: NativeTransitionOptions = {
    direction: 'left',
    duration: 300,
    slowdownfactor: 0,
    slidePixels: 0,
    iosdelay: 0,
    androiddelay: 0,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 0
   }

   server: string = "http://192.168.1.48:8888/tracker/track_server/"
  constructor(private nativePageTransitions: NativePageTransitions,private navCtrl: NavController,public http: Http) { }
  leaveTransition(){
    this.nativePageTransitions.slide(this.options)
    this.navCtrl.pop()
   
  }
  navPop(){
    this.navCtrl.pop()
  }

  postData(body, file){
    let type = "application/json; charset=UTF-8"
    let headers = new Headers({'Content-Type': type})
    let options = new RequestOptions({headers: headers})

    return this.http.post(this.server + file, JSON.stringify(body), options)
  }

  openPage(page: any) {

    this.nativePageTransitions.slide(this.options);
    return this.navCtrl.navigateForward(page,{animated:false});
  
  }
}
