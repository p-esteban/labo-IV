import { Component } from '@angular/core';
import { Usuario } from './Entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  usuario : Usuario;
  constructor(){
    this.usuario = new Usuario();
  } 
  mostrar(){
    this.title = "es hora de mate cocido";
    console.log(" titulo ",this.title);
    console.info(this.usuario);
  }
}
