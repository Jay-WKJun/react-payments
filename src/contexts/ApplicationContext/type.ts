import type {
  CardCompany,
  CardNickname,
  CardNumber,
  CardOwner,
  CardPassword,
  ExpireMonth,
  ExpireYear,
  SecurityCode,
} from '@/types';

import type { CardType } from '../CardContext';

export interface Card extends Record<CardType, unknown> {
  cardCompany: CardCompany;
  cardNickname: CardNickname;
  cardNumbers: [CardNumber, CardNumber, CardNumber, CardNumber];
  expireDates: [ExpireMonth, ExpireYear];
  cardOwner: CardOwner;
  securityCode: SecurityCode;
  passwords: [CardPassword, CardPassword];
}
export type CardList = { [cardId: string]: Card };

export interface ApplicationContextProps {
  cardList: CardList;
  onCardConfirm: (card: Card, cardId: string) => any;
  onCardDelete: (card: Card, cardId: string) => any;
  onCardUpdate: (card: Card, cardId: string) => any;
  onCardSubmit: (card: Card, cardId: string) => any;
}
