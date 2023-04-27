export class Proyectos {
    id? : number;
    imgP : string;
    nombreP : string;
    descripcionP : string;
    linkP: string;

    constructor(imgP: string, nombreP: string, descripcionP: string, linkP: string ){
        this.imgP = imgP;
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.linkP = linkP;
    }
}
