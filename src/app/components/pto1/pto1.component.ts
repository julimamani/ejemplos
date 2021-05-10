import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-pto1',
  templateUrl: './pto1.component.html',
  styleUrls: ['./pto1.component.css']
})
export class Pto1Component implements OnInit {
  noticias: Array<Noticia>;
  indice:number=0;
  noticia:Noticia = new Noticia();

  constructor() {

    this.noticias = new Array<Noticia>();
    this.noticias.push(new Noticia(1, "Se habilito Tp1 Angular", "Se habilito tp1 angular hasta la fecha ..", "noti1.jpg"));
    this.noticias.push(new Noticia(2, "Se habilito Tp2 Angular", "Se habilito tp2 angular hasta la fecha ..", "noti2.jpg"));
    this.iniciar();
  }

  iniciar(){
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }

  }

  siguiente(){
    this.indice = this.indice +1;
    if (this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
  }


  anterior(){

  }
  ngOnInit(): void {
  }

}
