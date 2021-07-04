import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service'

import { ProyectoService } from 'src/app/services/proyecto.service'

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  constructor(public modalService: ModalService, public proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  public verMas(p: any) {    
    this.modalService.openDialog( 
      {
        titulo: p.nombre,
        descripcion: p.descripcion,
        caracteristicas: p.caracteristicas,
        imgUrl: p.imgUrl
      }
    );
  }

  public acortarTexto(texto: string) {            
    var trimmedString = texto.substr(0, 140);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    return trimmedString;
  }

}
