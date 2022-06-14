import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user:User = new User()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit() {
    window.scroll(0,0);

    if(environment.token == ''){
      this.router.navigate(['/entrar']);
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser);
  }

  confirmaSenha(event:any){
    this.confirmarSenha = event.target.value;
    //criando metodo para confirmar senha e quando colocar no formulario vai comparar senha
  }

  tipoUser(event:any){
    this.tipoUsuario = event.target.value;
    //aqui guarda o tipo de usuario
  }

  atualizar(){
    this.user.tipo = this.tipoUsuario;

    //operador ternario
    // ex:
    // condição ? verdade : falso
    this.user.senha != this.confirmarSenha ? alert('Senhas estãO INCORRETAS!') : this.authService
    .cadastrar(this.user)
    .subscribe((resp: User) =>{
    this.user = resp;

    this.router.navigate(['/entrar'])
      alert('Usuário atualizado com sucesso!');

    environment.token = '';
    environment.id = 0;
    environment.foto = '';
    environment.senha = '';
    this.router.navigate(['/entrar'])

    })
  }

  findByIdUser(id: number){
    this.authService.getByIdUser(id).subscribe((resp: User) =>{
      this.user = resp;
    })
  }

}
