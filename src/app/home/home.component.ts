import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(public usuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
    this.articulos.push({
      titulo: "Curso de Net Core",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat dis vel, nulla id proin vitae cursus enim quisque quam luctus, ac scelerisque convallis neque nibh semper non egestas bibendum.",
      fecha: new Date(),
      usuario: "${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}" ,
    },
    {
      titulo: "Curso de Angular",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat dis vel, nulla id proin vitae cursus enim quisque quam luctus, ac scelerisque convallis neque nibh semper non egestas bibendum.",
      fecha: new Date('17/03/2020'),
      usuario: "${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}" ,
    },
    {
      titulo: "Curso de Flutter",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat dis vel, nulla id proin vitae cursus enim quisque quam luctus, ac scelerisque convallis neque nibh semper non egestas bibendum.",
      fecha: new Date('30/06/2019'),
      usuario: "${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}" ,
    },)
  }

}
