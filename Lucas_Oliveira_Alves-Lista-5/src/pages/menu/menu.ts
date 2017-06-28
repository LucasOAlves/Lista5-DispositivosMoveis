import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from  '../home/home'
/**
 * Generated class for the Menu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {

  public currentPage = HomePage;
  public home = HomePage;
  public business = 'BusinessPage';
  public science = 'SciencePage';
  public technology = 'TechnologyPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page){
    this.currentPage = page;
  }

}
