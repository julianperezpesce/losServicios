import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {
  
  constructor(public usuarioInyectado: UsuarioService) { }

  ngOnInit(): void {
    console.log(this.usuarioInyectado.usuario.nombre);
    ;
    
  }

  cambiarNombre(){
    this.usuarioInyectado.usuario.nombre = "Julián"
  }

}
