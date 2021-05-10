export class Noticia {
    codigo:number;
    titulo:string;
    noticia:string;
    img:string;

    constructor(codigo?:number, titulo?:string, noticia?:string, img?:string){
        this.codigo = codigo;
        this.titulo = titulo;
        this.noticia = noticia;
        this.img= img;
    }
    
}
