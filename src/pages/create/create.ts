import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})

export class CreatePage {

  public numbers = [1];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  addInput() {
    let nr = this.numbers.length + 1;
    if(nr < 5) {
      this.numbers.push(nr);
    } else {
      alert('Antwortenlimit erreicht!');
    }
  }

  removeInput() {
    this.numbers.splice(-1, 1);
  }

}
