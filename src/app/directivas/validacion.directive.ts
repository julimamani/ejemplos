import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';


function verificarCaracterEspecial(c:AbstractControl){
  // si el control no ha sido usado retorno null
  if (c.value == null) return null;
  // si se ha ingresado un caracter especial en el titulo
  // la funcion test retornara true
  if(/^[a-zA-Z0-9 ]*$/.test(c.value) == false){
  // retorno un error mediante un objeto con un atributo booleado,
  // este atributo será parte del array de errors asociado al control.
  return {sinCaracterEspecial: true}
  }
  // en cualquier otro caso retorno null (sin error)
  return null;
 } 

@Directive({
  selector: '[sin-caracter-especial]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:verificarCaracterEspecial}
    ]
   
})
export class SinCaracterEspecial {
  constructor() { }
}





function verificarPrimerLetraMayuscula(c: AbstractControl){
  let texto:string = String(c.value);

  if (texto == null) { return null}
  if (texto.charAt(0) != texto.charAt(0).toUpperCase()){
    return {sinPrimeraLetraMayuscula: true}
  }
  return null;
}

@Directive({
  selector: '[sin-primera-letra-mayuscula]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:verificarPrimerLetraMayuscula}
    ]
   
})
export class sinPrimeraLetraMayuscula {
  constructor() { }
}