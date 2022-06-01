import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { UserLogin } from '../model/UserLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User;
  userLogin: UserLogin = new UserLogin;
  confirmarSenha: string;
  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0);
  }

  confirmaSenha(event:any){
    this.confirmarSenha = event.target.value;
    //criando metodo para confirmar senha e quando colocar no formulario vai comparar senha
  }

  tipoUser(event:any){
    this.tipoUsuario = event.target.value;
    //aqui guarda o tipo de usuario
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario;

    //operador ternario
    // ex:
    // condição ? verdade : falso
    this.user.senha != this.confirmarSenha ? alert('Senhas estãO INCORRETAS!') : this.authService
    .cadastrar(this.user)
    .subscribe((resp: User) =>{
    this.user = resp;
    
    this.router.navigate(['/entrar'])
      alert('Usuario cadastrado com sucesso!')
    })


  }
}
