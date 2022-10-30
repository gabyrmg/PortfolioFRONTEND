import { Component, OnInit } from '@angular/core';
import { Hardyskill } from 'src/app/model/hardyskill';
import { SHardyskillsService } from 'src/app/service/s-hardyskills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-yskills',
  templateUrl: './hard-yskills.component.html',
  styleUrls: ['./hard-yskills.component.css']
})
export class HardYskillsComponent implements OnInit {
  skill: Hardyskill[] = [];

  constructor(private sSkill: SHardyskillsService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }

  }

  cargarSkills(): void {
    this.sSkill.lista().subscribe(data => { this.skill = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sSkill.delete(id).subscribe(data => {
        this.cargarSkills();
      }, err => {
        alert("No se pudo eliminar la habilidad");
      }
      )
    }
  }

}
