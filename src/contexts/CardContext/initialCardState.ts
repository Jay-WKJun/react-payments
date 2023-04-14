import { cloneDeep } from 'lodash-es';

import {
  CardCompanyState,
  CardNicknameState,
  CardNumberState,
  CardOwnerState,
  CardPasswordState,
  ExpireMonthState,
  ExpireYearState,
  SecurityCodeState,
} from './types';

export type CardState = {
  cardNickname: CardNicknameState;
  cardNumbers: CardNumberState[];
  expireDates: [ExpireMonthState, ExpireYearState];
  cardOwner: CardOwnerState;
  securityCode: SecurityCodeState;
  passwords: CardPasswordState[];
  cardCompany: CardCompanyState;
};

export type CardStateUnitProperties =
  | CardNicknameState
  | CardNumberState
  | ExpireMonthState
  | ExpireYearState
  | CardOwnerState
  | SecurityCodeState
  | CardPasswordState
  | CardCompanyState;

const initialCardState: CardState = {
  cardNickname: {},
  cardNumbers: [{}, {}, {}, {}],
  expireDates: [{}, {}],
  cardOwner: {},
  securityCode: {},
  passwords: [{}, {}],
  cardCompany: {},
};

export type CardType = keyof CardState;

export function getInitialCardStore() {
  return cloneDeep(initialCardState);
}
