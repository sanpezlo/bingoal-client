export interface FindCardsDto {
  offset?: number;
  limit?: number;
}

export interface ICard {
  _id: string;
  data: number[];
  createdAt: Date;
  updatedAt: Date;
}
