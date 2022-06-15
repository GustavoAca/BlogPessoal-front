import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: User = new User();
  idUser = environment.id;

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;

  postagem: Postagem = new Postagem();
  listaPostagens: Postagem[];

  key = 'data'
  reverse = true

  constructor(
    public router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }
    this.authService.refreshToken();
    this.getAllPostagens();
    this.getAllTemas();

  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe({
      next: (resp: Tema[]) => {
        this.listaTemas = resp;
      },
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe({
      next: (resp: Tema) => {
        this.tema = resp;
      },
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe({
      next: (resp: Postagem[]) => {
        this.listaPostagens = resp;
      }
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe({
      next: (resp :User) =>{
        this.user = resp;
      },
    })
  }

  publicar() {
    this.tema.id = this.idTema;
    this.postagem.tema = this.tema;

    this.user.id = this.idUser;
    this.postagem.usuario = this.user;

    this.postagemService.postPostagem(this.postagem).subscribe({
      next: (resp: Postagem) => {
        this.postagem = resp;
        console.log(this.postagem)
        this.alertas.showAlertSuccess('Postagem realizada com sucesso!');
        this.postagem = new Postagem();
        this.getAllPostagens();
      },
    })

  }

}
