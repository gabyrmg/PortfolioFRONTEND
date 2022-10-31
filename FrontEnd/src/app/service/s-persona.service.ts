import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class SPersonaService {
  
  URL = environment.URL + 'persona/';
  //URL : 'http://localhost:8080/persona/'
  //URL : 'https://grmgportfolio.herokuapp.com/persona/'

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`)
  }

  public save(perso: Persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', perso);
  }

  public update(id: number, perso: Persona):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, perso );
  }

 public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
