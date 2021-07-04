import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
declare let $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public modal:NgbActiveModal) { }

  public titulo = null;
  public descripcion = null;
  public caracteristicas = [];
  public imgUrl = null;
  public galeria = [];

  ngOnInit(): void {    
  }

  setDialogProperties(props: any) {  
    this.imgUrl = props.imgUrl;  
    this.titulo = props.titulo || "Sin título";
    this.descripcion = props.descripcion || "Sin descripción";    
    this.caracteristicas = props.caracteristicas || [];
    this.galeria = props.galeria || [];
  }

  onActionTake() {            
    this.modal.close();
  }  

}
