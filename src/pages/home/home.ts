import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('entireCard') el1: ElementRef;

  public numbero =  [ 1, 2, 3, 4];

  constructor(
    public navCtrl: NavController,
    private renderer: Renderer2) {}

  showContent(el, smel){    
    console.log(el.style.visibility);
    if(el.style.opacity == "1") {
      el.style.opacity = '0';
      this.renderer.removeClass(smel, 'cardAllActive');
      this.renderer.addClass(smel, 'cardAllPassive'); 
      this.renderer.removeClass(el, 'cardContentActive');
      this.renderer.addClass(el, 'cardContentPassive');
    } else {
      el.style.opacity = '1';
      this.renderer.removeClass(smel, 'cardAllPassive');
      this.renderer.addClass(smel, 'cardAllActive');
      this.renderer.removeClass(el, 'cardContentPassive');
      this.renderer.addClass(el, 'cardContentActive');
    }
  }

}
