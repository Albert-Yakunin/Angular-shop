import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent {
  @Input() title: string;
  constructor(public modalService:ModalService){}
}
