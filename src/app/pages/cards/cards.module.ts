import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from '@pages/cards/cards-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { CardsComponent } from '@pages/cards/cards.component';
import { CardCardComponent } from './card-card/card-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardsComponent, CardCardComponent, CardComponent],
  imports: [CommonModule, CardsRoutingModule, SharedModule],
})
export class CardsModule {}
