import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardyskill } from 'src/app/model/hardyskill';
import { SHardyskillsService } from 'src/app/service/s-hardyskills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreH: string = '';
  porcentaje: number ;

  constructor(private sSkill: SHardyskillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Hardyskill(this.nombreH, this.porcentaje);
    this.sSkill.save(skill).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
