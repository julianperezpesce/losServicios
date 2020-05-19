import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  nombre:string;
  constructor(private UsuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
    this.UsuarioInyectado.usuario.nombre
  }

  cambiarNombre(nombre){
    this.UsuarioInyectado.usuario.nombre = "Maria";
  }

}
