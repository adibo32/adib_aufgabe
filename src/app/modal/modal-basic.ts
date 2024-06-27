import { Component, inject, Input, TemplateRef } from '@angular/core';

import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Beer } from '../models/beer';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'ngbd-modal-basic',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './modal-basic.html',
})
export class NgbdModalBasic {
	private modalService = inject(NgbModal);
	closeResult = '';
	​@Input() selected?: Beer;
	value: string = "";
	@Input() update: any;

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			() => {
				this.closeResult = `Ihre Bewertung: : ${this.value}`;
				this.update(this.selected?.id,this.value)
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
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
