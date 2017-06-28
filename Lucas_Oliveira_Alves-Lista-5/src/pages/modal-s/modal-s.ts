import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalS page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-s',
  templateUrl: 'modal-s.html',
})
export class ModalS {

  public noticia={titulo: '', thumbnail:'',corpo:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController) {
    this.noticia.titulo = this.navParams.get('titulo');
    this.noticia.thumbnail = this.navParams.get('thumbnail');
    this.noticia.corpo = this.navParams.get('body');
    console.log( this.navParams.get('body'));
  }

closeModal(){
  this.viewCrtl.dismiss();
}

}
