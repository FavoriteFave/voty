import { VoteCommentsPage } from './../vote-comments/vote-comments';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('entireCard') el1: ElementRef;

  public numbero =  [ 1, 2, 3, 4];
  public answer;
  public voteCasted = false;
  public tabs1 = VoteCommentsPage;

  public no = 'No';
  public doughnutChartLabels:string[] = ['Yes', 'No', 'Maybe'];
  public doughnutChartData:number[] = [4, 10, 1];
  public doughnutChartType:string = 'doughnut';
 
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

  logAll() {
    console.log(this.answer);
    this.voteCasted = true;
  }
  
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }

  navigateTo() {
      this.navCtrl.push(VoteCommentsPage);
  }

}
