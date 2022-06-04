import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    public router : Router
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      // alert('Sua seção expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }
  }

}
