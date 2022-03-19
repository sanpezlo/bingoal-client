import { Component, Input } from '@angular/core';

import { ICard } from '@pages/cards/interfaces/card.interface';

@Component({
  selector: 'app-card-card',
  templateUrl: './card-card.component.html',
  styleUrls: ['./card-card.component.css'],
})
export class CardCardComponent {
  @Input() card!: ICard;
  constructor() {}
}
