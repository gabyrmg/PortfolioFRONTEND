import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona';
import { SPersonaService } from 'src/app/service/s-persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  perso: Persona = null;

  constructor(private sPersona: SPersonaService, private activedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data => {
      this.perso = data;
    }, err => {
      alert("Error al modificar persona");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.perso).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar persona");
      this.router.navigate(['']);
    })
  }
uploadImage($event: any) {
    
  }

}
