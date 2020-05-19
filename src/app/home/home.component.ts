import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { UsuarioService } from '../services/usuario.service';
import { ArticulosService } from '../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(private usuarioInyectado: UsuarioService, private articuloInyectado: ArticulosService,
    private ruta: Router) { }

  ngOnInit(): void {
    this.articulos.push({
      titulo: "Curso de Net Core",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat dis vel, nulla id proin vitae cursus enim quisque quam luctus, ac scelerisque convallis neque nibh semper non egestas bibendum.",
      fecha: new Date(),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    },
    {
      titulo: "Curso de Angular",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat dis vel, nulla id proin vitae cursus enim quisque quam luctus, ac scelerisque convallis neque nibh semper non egestas bibendum.",
      fecha: new Date('03/17/2020'),
      usuario: `${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    },
    {
      titulo: "Curso de Flutter",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat dis vel, nulla id proin vitae cursus enim quisque quam luctus, ac scelerisque convallis neque nibh semper non egestas bibendum.",
      fecha: new Date('06/30/2019'),
      usuario:` ${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido}`,
    },)
  }

  irAlDetalle(articulo: Articulo){
    this.articuloInyectado.articulo = articulo;
    this.ruta.navigateByUrl('/articulo-detalle');
  }

}
