import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public title: string = this.modalService.getTitle;
  public isOpen: BehaviorSubject<boolean> = this.modalService.modalStatus;

  constructor(private modalService: ModalService) {

  }

}