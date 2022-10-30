import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Persona';
import { SPersonaService } from 'src/app/service/s-persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = null;
  
  constructor(public sPersonaService: SPersonaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
    
  }

  cargarPersona(): void {
    this.sPersonaService.detail(1).subscribe(data=>{
      this.persona = data
    })
  }

 /* delete(id?: number) {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe(data => {
        this.cargarEducacion();
      }, err => {
        alert("No se pudo eliminar la instancia de educación");
      }
      )
    }*/

}
