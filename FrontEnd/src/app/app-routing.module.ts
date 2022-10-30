import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/hard-yskills/edit-skill.component';
import { NewSkillComponent } from './components/hard-yskills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent },
  { path: 'nuevaskill', component: NewSkillComponent }, 
  { path: 'nuevoproyecto', component: NewProyectoComponent }, 
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editaracercade/:id', component: EditAcercaDeComponent },
  { path: 'editproyecto/:id', component: EditProyectoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
