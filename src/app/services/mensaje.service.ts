import { Injectable } from '@angular/core';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: Array<any>; 


  constructor() {
    //inicializamos el array y le asignamos unos datos para poder consultar.
    this.mensajes = new Array<Mensaje>();
    this.mensajes = [
     {
     id:1,
     para: 3884149299,
     desde: 3886839322,
     texto: "Estas invitado a la reunion de fin de año.",
     fecha: "2014-01-01T23:28:56.782Z",
     },
     {
     id:2,
     para: 3884342334,
     desde: 3886987322,
     texto: "Llegando con demoras a la reunion.",
     fecha: "2014-01-01T23:28:56.782Z" 
     }]
    
  }

  getMensajes():Array<Mensaje>{
    //retornamos el array mensajes al lugar de donde es solicitado.
    return this.mensajes;
  }

  addMensaje(mensaje: Mensaje):void{
    mensaje.id = this.getIdDisponible();
    this.mensajes.push(mensaje);
  }

  getIdDisponible():number{
    var maxid: number;
    maxid = 0;
    for ( var i = 0; i < this.mensajes.length;i++){
    if(maxid < this.mensajes[i].id){
    maxid = this.mensajes[i].id;
    }
    };
    return (maxid + 1);
  }

  // métodos aun sin implementar.
  getMensaje (id: number){
  }
  
  updateMensaje(mensaje: Mensaje):void{
  }
  
  borrarMensaje(mensaje:Mensaje){
    let indice:number = this.mensajes.findIndex(m=>(m.id == mensaje.id));
    this.mensajes.splice(indice, 1);
  }

  

}
