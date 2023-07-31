import { Component, OnInit } from '@angular/core';
import { AMOUNTS } from 'src/assets/cards/amountsCards';
import { ICardsMeta } from './footer.model';
import { CardStateService } from 'src/app/shared/services/card-state.service';

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

  constructor(private cardStateService: CardStateService) {

  }

  ngOnInit(): void {
    this.currentCards = AMOUNTS.vitaminsForSoul;
    this.backOfCards = `${this.currentCards.path}/back.png`;
    this.composePaths();
    this.subscribeToCardState();
  }

  private subscribeToCardState() {
    this.cardStateService.cardDelete$.subscribe((card) => this.addCard(card))
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
    this.cards = this.cards.filter(item => item !== card);
    this.cardStateService.addCard({path: card, isOpen: this.isOpen, backOfCard: this.backOfCards, isSelected: false});
  }

  public addCard(card: string) {
    if (card.includes(this.currentCards.path)) this.cards.push(card);
  }

  public setIsOpen() {
    this.isOpen = !this.isOpen;
  }

  public shuffleArray() {
    this.cards.sort(() => Math.random() - 0.5);
  }
}
