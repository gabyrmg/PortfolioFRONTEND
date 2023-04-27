import { Injectable } from '@angular/core';
/*import { ref } from '@angular/fire/storage';*/
import { Storage,getDownloadURL,list,ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0]
    //console.log(file);
    const imgRef = ref(this.storage, `imagen/`+ name)
    uploadBytes(imgRef, file)
    .then(Response=> {this.getImages()})
    .catch(error => console.log(error))
    
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async Response =>{
      for(let item of Response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    }) 
    .catch(error => console.log(error))

  }

  clearUrl(){
    this.url = "";
  }
}
 