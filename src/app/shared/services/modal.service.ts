import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
    private isModalOpen = new BehaviorSubject<boolean>(false);
    private title: string = '';

    public toggleModalWindow() {
   		this.isModalOpen.next(!this.isModalOpen.value);
  	}

    get modalStatus() {
        return this.isModalOpen;
    }

    get getTitle() {
        return this.title
    }

    set setTitle(title: string) {
        this.title = title;
    }
}