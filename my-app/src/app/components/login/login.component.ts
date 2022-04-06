import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Entidades/usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  usuario = new Usuario();
  constructor(private route:Router){
    
  } 
  login(){
   if(this.usuario.name == "Admin" && this.usuario.pass == 1234){
    this.route.navigate(['/bienvenido'])
     console.info(this.usuario);
   }else{
    this.route.navigate(['/error'])
   }

  }
  ngOnInit(): void {
  }

}
