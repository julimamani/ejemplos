import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  accion:string = "new";
  mensaje: Mensaje;
  tamMaxTexto: number = 20;
  tamMinTexto: number = 4;

  tamTexto: number;
  mensajes: Array<Mensaje>;

  constructor(private mensajeService: MensajeService) {
    this.mensaje = new Mensaje();
    this.mensaje.fecha = new Date();
    this.mensajes = new Array<Mensaje>(); 
    this.mostrarHistoricos();
   
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
    console.log(this.tamTexto);
  }
   
  public mostrarHistoricos(){
    this.mensajes = this.mensajeService.getMensajes();
  }
   
  public enviarMensaje(form:NgForm){
    console.log("Enviando ...");
    //this.mensaje.fecha = new Date();
    this.mensajeService.addMensaje(this.mensaje);
    this.mensaje = new Mensaje();
    this.mostrarHistoricos ();
    form.resetForm();
  }
   

  ngOnInit(): void {
  }

  elegirMensaje(mensaje:Mensaje){
      //creo una variable temporal para recibir el objeto elegido
      let varMensaje:Mensaje = new Mensaje();
      //asigno el elemento elegido (recibido por parametro) a la vble temporal
      //Object.assing asigna atributo por atributo desde un objeto a otro
      //util en este caso para crear una copia de otro objeto
      Object.assign(varMensaje, mensaje);
      //Asigno esta vble temporal a la variable tiene binding con el formulario
      this.mensaje = varMensaje;
      //establesco la accion a 'update' para que se habilite la modificacion
      this.accion = 'update';
  }
  borrarMensaje(mensaje:Mensaje){
    this.mensajeService.borrarMensaje(mensaje);
    this.mensajes = this.mensajeService.getMensajes();
  }
}
