import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias=[];
  constructor(public navCtrl: NavController, public http: Http) {
    this.getPage();

  }

  getPage(){
    //Parametro API
    let parametros = '&api-key=test';
    //http://content.guardianapis.com/search?q=footbal&api-key=test
    let url = `http://content.guardianapis.com/search?${parametros}`;
    // Sem Headers disponíveis
    let header ={};

    this.http.get(url,header).subscribe(
      sucesso =>{
        let news  = sucesso.json().response.results;
        //Para cada noticia, faz um push  no array com o titulo
        for(let i=0;i < news.length;i++){
          this.noticias.push({
            titulo: news[i].webTitle,
            categoria: news[i].sectionName
          })
        }
      }
    )
  }


}
