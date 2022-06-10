import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]> {
    // return this.http.get<Postagem[]>('https://gustablogpessoal.herokuapp.com/postagem', this.token);

    return this.http.get<Postagem[]>('http://localhost:8080/postagem', this.token);
  }

  postPostagem(postagem: Postagem):Observable<Postagem>{
    // return this.http.post<Postagem>('https://gustablogpessoal.herokuapp.com/postagem', postagem, this.token);

    return this.http.post<Postagem>('http://localhost:8080/postagem', postagem, this.token);

  }
}
