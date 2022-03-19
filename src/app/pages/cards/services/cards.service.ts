import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { FindCardsDto, ICard } from '@pages/cards/interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private readonly url = `${environment.baseUrl}/v1/cards`;

  constructor(private readonly http: HttpClient) {}

  find(findCardsDto: FindCardsDto = {}): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.url, {
      params: findCardsDto as { [param: string]: number },
    });
  }
}
