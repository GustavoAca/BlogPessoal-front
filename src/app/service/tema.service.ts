import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]> {
    // return this.http.get<Tema[]>('http://localhost:8080/tema', this.token);

    return this.http.get<Tema[]>('https://gustablogpessoal.herokuapp.com/tema', this.token);
  }

  getByIdTema(id: number): Observable<Tema> {

    return this.http.get<Tema>(`https://gustablogpessoal.herokuapp.com/tema/${id}`, this.token);

    // return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token);
  }


  postTema(tema: Tema): Observable<Tema> {
    // return this.http.post<Tema>('http://localhost:8080/tema',tema, this.token);
    return this.http.post<Tema>('https://gustablogpessoal.herokuapp.com/tema', tema, this.token);

  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://gustablogpessoal.herokuapp.com/tema', tema, this.token);

    // return this.http.put<Tema>('http://localhost:8080/tema', tema, this.token);
  }

  deleteTema(id: number) {
    return this.http.delete(`https://gustablogpessoal.herokuapp.com/tema/${id}`, this.token);

    // return this.http.delete(`http://localhost:8080/tema/${id}`, this.token);


  }
}
