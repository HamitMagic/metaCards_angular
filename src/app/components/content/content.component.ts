import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ICard } from './content.model';
import { CardStateService } from 'src/app/shared/services/card-state.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public cards: ICard[] = [];

  constructor(
    private cardStateService: CardStateService, private eRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.subscribeToCardState();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.cards = this.cards.map(card => ({...card, isSelected: false}));
    }
  }

  private subscribeToCardState() {
    this.cardStateService.card$.subscribe((card) => this.addCard(card));
  }

  public setSelected(card: ICard){
    event?.stopPropagation();
    this.cards = this.cards.map(item => {
      if (item.path === card.path) item.isSelected = true;
      else item.isSelected = false;
      return item;
    })
  }

  public addCard(card: ICard) {
    this.cards.push(card);
  }

  public removeCard(card: ICard) {
    this.cards = this.cards.filter(item => item.path !== card.path);
    this.cardStateService.deleteCard(card.path);
  }

  public setIsOpen(card: ICard) {
    this.cards = this.cards.map(item => {
      if (item.path !== card.path) return item;
      item.isOpen = !item.isOpen;
      return item;
    })
  }

  
}
