import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from '../models/articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User> = new Array<User>();
  formularioArticulo: FormGroup;
  articulo: Articulo = new Articulo();
  esNuevo: boolean = true;

  constructor(private articuloInyectado: ArticulosService, 
    private fbGenerador: FormBuilder,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {

    this.esNuevo = this.rutaActiva.snapshot.params.esNuevo;
       
    
    this.formularioArticulo = this.fbGenerador.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required]
    })

    this.articuloInyectado.leerTodosLosUsuarios().subscribe((usuarioRecibido)=>{
      this.usuarios = usuarioRecibido;
    })

    if(!this.esNuevo){
      this.articulo = this.articuloInyectado.articulo;
      this.formularioArticulo.setValue({
        title: this.articulo.title,
        body: this.articulo.body,
        userId: this.articulo.userId,
      })
    } 
  }

  agregarArticulo(){
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articuloInyectado.guardarArticulo(this.articulo).subscribe((articuloRecibido)=>{
      console.log("Ha registrado su articulo");
      this.formularioArticulo.reset();
    })   
  }

  editar(){
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articulo.id = this.articuloInyectado.articulo.id;
    this.articuloInyectado.actualizarArticulo(this.articulo).subscribe((articuloRecibido)=>{
      console.log(articuloRecibido);
      console.log("Edición correcta");
      
      
    })
  }
}
