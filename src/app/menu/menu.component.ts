import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome;
  foto = environment.foto;


  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  sair(){
    this.router.navigate(['/entrar'])

    environment.token = '';
    environment.id = 0;
    environment.foto = '';
    environment.senha = '';
  }
}
