import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
  public linkDemo = null;
  public credenciales = null;

  ngOnInit(): void {    
  }

  setDialogProperties(props: any) {  
    this.imgUrl = props.imgUrl;  
    this.titulo = props.titulo || "Sin título";
    this.descripcion = props.descripcion || "Sin descripción";    
    this.caracteristicas = props.caracteristicas || [];
    this.galeria = props.galeria || [];
    this.linkDemo = props.linkDemo || "";
    this.credenciales = props.credenciales || "";
  }

  onActionTake() {            
    this.modal.close();
  }  

}