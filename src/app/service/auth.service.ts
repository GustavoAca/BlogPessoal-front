import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(user:User): Observable <User>{
    return this.http.post<User>("http://localhost:8080/usuarios/cadastrar", user)

  }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
      return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }
}
