import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hardyskill } from '../model/hardyskill';

@Injectable({
  providedIn: 'root'
})
export class SHardyskillsService {
  URL = environment.URL + 'skill/' ;

  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Hardyskill[]>{
    return this.httpClient.get<Hardyskill[]>(this.URL + 'lista');
  }

  public detail(id:number):Observable<Hardyskill>{
    return this.httpClient.get<Hardyskill>(this.URL + `detail/${id}`)
  }

  public save(skill: Hardyskill): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skill);
  }

  public update(id: number, skill: Hardyskill):Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
