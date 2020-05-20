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
    this.articuloInyectado.leerNoticias().subscribe((articulosDesdeApi)=>{
      this.articulos = articulosDesdeApi;
    });


    let articuloEnviar: Articulo = new Articulo();
    articuloEnviar.body= "Este es el cuerpo del articulo";
    articuloEnviar.title= "Este es el articulo de prueba";
    articuloEnviar.userId = 4;
    this.articuloInyectado.guardarArticulo(articuloEnviar).subscribe((articuloCreado)=>{
      this.articulos.push(articuloCreado);
    })
  }

  irAlDetalle(articulo: Articulo){
    this.articuloInyectado.articulo = articulo;
    this.ruta.navigateByUrl('/articulo-detalle');
  }

  borrar(id: number){
    this.articuloInyectado.borrarArticulo(id).subscribe((datos)=>{
      console.log(datos);      
    })    
  }

  actualizar(articulo: Articulo){
    this.articuloInyectado.articulo = articulo;
    this.ruta.navigateByUrl('/agregar-articulo/');
    // this.articuloInyectado.actualizarArticulo(articulo).subscribe((articuloRecibido)=>{
    //   console.log(articuloRecibido);      
    // })
  }

}
