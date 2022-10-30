import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyectos = null;

  constructor(private sProyectos: SProyectosService, private activedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.sProyectos.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    })
  }

}
