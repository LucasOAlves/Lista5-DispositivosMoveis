import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { Http, Headers } from '@angular/http';

/**
 * Generated class for the BusinessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-business-page',
  templateUrl: 'business-page.html',
})
export class BusinessPage {

  public noticias=[];
  public page = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public modalCtrl: ModalController) {
    this.getPage();
  }

  getPage(){
    let parameters = `section=business&page=${this.page}&page-size=10&show-fields=body,thumbnail&api-key=test`;
    //let parameters = `section=science&show-fields=body,thumbnail&api-key=test`;
    let url = `http://content.guardianapis.com/search?${parameters}`;
    // Sem Headers disponíveis
    let header ={};

    this.http.get(url,header).subscribe(
      sucesso =>{
        let news  = sucesso.json().response.results;
        //Para cada noticia, faz um push  no array com o titulo
        for(let i=0;i < news.length;i++){
          this.noticias.push({
            titulo: news[i].webTitle,
            categoria: news[i].sectionName,
            thumbnail: news[i].fields.thumbnail,
            body: news[i].fields.body,
            data: this.formatDateTime(news[i].webPublicationDate),
          });
        }
      }
    );
    this.page++;
  }

  doInfinite(infiniteScroll){
    let parameters = `section=business&page=${this.page}&page-size=10&show-fields=body,thumbnail&api-key=test`;
    //let parameters = `section=science&show-fields=body,thumbnail&api-key=test`;
    let url = `http://content.guardianapis.com/search?${parameters}`;
    // Sem Headers disponíveis
    let header ={};

    this.http.get(url,header).subscribe(
      sucesso =>{
        let news  = sucesso.json().response.results;
        console.log(sucesso.json());
        //Para cada noticia, faz um push  no array com o titulo
        for(let i=0;i < news.length;i++){
          this.noticias.push({
            titulo: news[i].webTitle,
            categoria: news[i].sectionName,
            thumbnail: news[i].fields.thumbnail,
            body: news[i].fields.body,
            data: this.formatDateTime(news[i].webPublicationDate)
          });
        }
      }
    );
    this.page++;
    infiniteScroll.complete();
  }

  formatDateTime(date){
    let data = new Date(date);
    return data.toDateString();
  }




  openModal(index){
    console.log(this.noticias[index].body);
    let modal  =  this.modalCtrl.create('ModalS',{
      titulo: this.noticias[index].titulo,
      thumbnail: this.noticias[index].thumbnail,
      body:  this.noticias[index].body
    });

    modal.present();

  }

}
