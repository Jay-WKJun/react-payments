import z from 'zod';

import {
  cardCompanySchema,
  cardNickNameSchema,
  cardNumberSchema,
  cardOwnerSchema,
  cardPasswordSchema,
  expireMonthSchema,
  expireYearSchema,
  securityCodeSchema,
} from '@/types';

export const CardSchema = z.object({
  cardCompany: cardCompanySchema,
  cardNickname: cardNickNameSchema,
  cardNumbers: z.array(cardNumberSchema).length(4),
  expireDates: z.tuple([expireMonthSchema, expireYearSchema]),
  cardOwner: cardOwnerSchema,
  securityCode: securityCodeSchema,
  passwords: z.array(cardPasswordSchema).length(2),
});

export type Card = z.infer<typeof CardSchema>;
export type CardList = { [cardId: string]: Card };

export interface ApplicationContextProps {
  cardList: CardList;
  onCardConfirm: (card: Card, cardId: string) => any;
  onCardDelete: (card: Card, cardId: string) => any;
  onCardUpdate: (card: Card, cardId: string) => any;
  onCardSubmit: (card: Card, cardId: string) => any;
}
