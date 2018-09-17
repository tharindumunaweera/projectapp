import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MakeappointmentPage } from '../makeappointment/makeappointment';

/**
 * Generated class for the RequirementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requirements',
  templateUrl: 'requirements.html',
})
export class RequirementsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequirementsPage');
  }

  goappointment(){
    this.navCtrl.push(MakeappointmentPage);
  }
 

}
