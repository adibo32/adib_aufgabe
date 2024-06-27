import { Component, inject, Input, TemplateRef } from '@angular/core';

import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Beer } from '../models/beer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ngbd-modal-add-bear',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-add-bear.html',
})
export class NgbdModalAddBear {
  private modalService = inject(NgbModal);
  closeResult = '';
  @Input() selected?: Beer;
  name: string = '';
  origin: string = '';
  picture: string = '';
  @Input() add: any;

  open(content: TemplateRef<any>) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        () => {
          this.closeResult = `Ihre Bewertung: : ${this.name} ${this.origin}${this.picture}`;
          this.add(this.name, this.origin, this.picture);
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
