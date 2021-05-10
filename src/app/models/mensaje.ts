export class Mensaje {
    id: number;
    para: number;
    desde: number;
    texto: string;
    fecha: Date;
    Mensaje (id?:number, para?: number, desde?:number, texto?:string, fecha?:Date){
        this.id = id;
        this.para = para;
        this.desde = desde;
        this.texto = texto;
        this.fecha = fecha;
    }

}
