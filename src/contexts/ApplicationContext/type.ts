import { Service } from '@/hooks';
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

type TCardState<T> = { value: T };
export type TCard = {
  cardCompanies: [TCardState<CardCompany>];
  cardNicknames: [TCardState<CardNickname>];
  cardNumbers: [TCardState<CardNumber>, TCardState<CardNumber>, TCardState<CardNumber>, TCardState<CardNumber>];
  expireDates: [TCardState<ExpireMonth>, TCardState<ExpireYear>];
  cardOwners: [TCardState<CardOwner>];
  securityCodes: [TCardState<SecurityCode>];
  passwords: [TCardState<CardPassword>, TCardState<CardPassword>];
};
export type TCardList = { [cardId: string]: TCard };

export type TCardListService = Service<TCardList | null>;

export type TApplicationContextValue = {
  onCardConfirmClick: (card: TCard) => any;
  service: TCardListService;
};
