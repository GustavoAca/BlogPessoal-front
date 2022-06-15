import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { AlertaComponent } from './alerta/alerta.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UserEditComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    //usado para usar o href na pagina e não ter chance de dar erro de rota
    provide: LocationStrategy,
    useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
