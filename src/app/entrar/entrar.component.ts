import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import { environment } from '../../environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin:UserLogin = new UserLogin;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
  }

  entrar(){
    this.authService.entrar(this.userLogin).subscribe((resp:UserLogin) =>{
      this.userLogin = resp;

      environment.token = this.userLogin.token;
      environment.nome = this.userLogin.nome;
      environment.foto = this.userLogin.foto;
      environment.id = this.userLogin.id;


      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status != 200){
       this.alerta.showAlertDanger("Usuario ou senha estão incorretos");
      }
    })
  }

}
