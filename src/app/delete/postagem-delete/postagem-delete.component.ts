import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem();
idPost: number

  constructor(private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private authService: AuthService) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.authService.refreshToken();
    this.idPost = this.route.snapshot.params['id'];
    this.findByIdPostagem(this.idPost);
    console.log(this.postagem)


  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe({
      next: (resp: Postagem) => {
        this.postagem = resp;
      },
    })
  }



  apagar() {
    this.postagemService.deletePostagem(this.idPost).subscribe(() =>{
      alert("Postagem apagada")
      this.router.navigate(['/inicio'])
    })
  }


}


