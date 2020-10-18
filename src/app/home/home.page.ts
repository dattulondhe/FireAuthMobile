import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { WindowService } from '../service/window.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  windowRef: any;
  prefix: any = '+91';
  line: any;
  verifCode: any;

  constructor(public windowService: WindowService) { }


  async ionViewWillEnter() {
    this.windowRef = await this.windowService.windowRef;
    this.windowRef.recaptchaVerifier = await new firebase.auth.RecaptchaVerifier('recaptcha-container');
    await this.windowRef.recaptchaVerifier.render()
  }

  sendLoginCode() {
    //Make sure phone number in e164 format
    const num = this.prefix.toString() + this.line.toString();
    const appVerifier = this.windowRef.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
      }).catch(err => console.log('err1', err))
  }

  submitVerif() {
    console.log(this.verifCode)
    this.windowRef.confirmationResult.confirm(this.verifCode.toString())
      .then(async result => {
        console.log(result)
        //If the result is successful...
      })
      .catch(err => {
        console.log('err2', err)
      });

  }

}