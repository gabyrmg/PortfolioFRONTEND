export class Educacion {
    id? : number;
    /*---*/
    imgEd : string;
    /*---*/
    nombreEd : string;
    descripcionEd : string;

    constructor(imgEd: string, nombreEd: string, descripcionEd: string){
        /*---*/
        this.imgEd = imgEd;
    /*---*/
        this.nombreEd = nombreEd;
        this.descripcionEd = descripcionEd;
    }
}
