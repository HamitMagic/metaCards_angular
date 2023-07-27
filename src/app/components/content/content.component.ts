import { Component } from '@angular/core';
import { ICard } from './content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public cards: ICard[] = [];

  public setCard(card: ICard) {
    this.cards.push(card);
  }

  public removeCard(card: ICard) {
    this.cards.filter(item => item.path !== card.path);
  }

  public setIsOpen(card: ICard) {
    this.cards = this.cards.map(item => {
      if (item.path !== card.path) return item;
      item.isOpen = !item.isOpen;
      return item;
    })
  }
}
