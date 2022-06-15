import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModelService: BsModalService
  ) { }

  private showAlert(message: string, tipo: string){
    const bsModalRef: BsModalRef = this.bsModelService.show(AlertaComponent)
    bsModalRef.content.type = tipo
    bsModalRef.content.message = message
  }

  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }

  showAlertSuccess(message: string){
    this.showAlert(message, 'success')
  }

  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }
}
