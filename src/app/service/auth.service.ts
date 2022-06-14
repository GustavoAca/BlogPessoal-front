import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  showAlertDanger: any;

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }


  cadastrar(user: User): Observable<User> {
    return this.http.post<User>("https://gustablogpessoal.herokuapp.com/usuarios/cadastrar", user);

    //local
    // return this.http.post<User>("http://localhost:8080/usuarios/cadastrar", user);

  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://gustablogpessoal.herokuapp.com/usuarios/${id}`, this.token)

    // return this.http.get<User>(`http://localhost:8080/usuarios/${id}`, this.token)
  }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://gustablogpessoal.herokuapp.com/usuarios/logar', userLogin);

   //local
    // return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin);
  }

  logado() {
    let ok = false;

    if (environment.token != '') {
      ok = true;

    }


    return ok;
  }
}
