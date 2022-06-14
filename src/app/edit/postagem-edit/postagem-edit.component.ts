import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';
import { Router, ActivatedRoute } from '@angular/router';
import { PostagemService } from '../../service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from '../../service/tema.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem();

  tema: Tema = new Tema();
  listaTemas: Tema[];

  idTema: number;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.authService.refreshToken();
    let id = this.route.snapshot.params['id'];
    this.findByIdPostagem(id);
    this.findAllTemas();


  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe({
      next: (resp: Postagem) => {
        this.postagem = resp;
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

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp;
    })
  }

  atualizar() {

  }


}
