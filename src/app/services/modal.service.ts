import { Injectable } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal) { }

  openDialog(props: any): Promise<any> {
    var modalRef = this.ngbModal.open(ModalComponent, {size: 'lg', backdrop: 'static', centered: true});
    modalRef.componentInstance.setDialogProperties(props);
    return modalRef.result;
  }
}
