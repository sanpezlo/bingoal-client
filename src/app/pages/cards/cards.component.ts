import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CardsService } from '@pages/cards/services/cards.service';
import { ICard } from '@pages/cards/interfaces/card.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards$!: Observable<ICard[]>;
  constructor(private readonly cardsService: CardsService) {}

  ngOnInit(): void {
    this.cards$ = this.cardsService.find();
  }
}
