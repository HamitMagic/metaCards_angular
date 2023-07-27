import { Component, OnInit } from '@angular/core';
import { AMOUNTS } from 'src/assets/cards/amountsCards';
import { ICardsMeta } from './footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public cards: string[] = [];
  public backOfCards: string = '';
  private currentCards: ICardsMeta = {} as ICardsMeta;
  public isOpen: boolean = false;
  public isNumbersShown: boolean = true;

  ngOnInit(): void {
    this.currentCards = AMOUNTS.vitaminsForSoul;
    this.backOfCards = `${this.currentCards.path}/back.png`;
    this.composePaths();
  }

  private composePaths() {
    for (let i = 1; i <= this.currentCards.amount; i++) {
      this.cards.push(`${this.currentCards.path}/${i}.jpg`);
    }
  }

  public setIsNumbersShown() {
    this.isNumbersShown = !this.isNumbersShown;
  }

  public removeCard(card: string) {
    this.cards = this.cards.filter(item => item !== card)
  }

  public setIsOpen() {
    this.isOpen = !this.isOpen;
  }

  public shuffleArray() {
    this.cards.sort(() => Math.random() - 0.5);
  }
}
