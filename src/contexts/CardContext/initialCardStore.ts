import { cloneDeep } from 'lodash-es';

import { createArray } from '@/utils';

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
  cardNicknames: CardNicknameState[];
  cardNumbers: CardNumberState[];
  expireDates: [ExpireMonthState, ExpireYearState];
  cardOwners: CardOwnerState[];
  securityCodes: SecurityCodeState[];
  passwords: CardPasswordState[];
  cardCompanies: CardCompanyState[];
}

const initialCardState: CardState = {
  cardNicknames: [{}],
  cardNumbers: [{}, {}, {}, {}],
  expireDates: [{}, {}],
  cardOwners: [{}],
  securityCodes: [{}],
  passwords: [{}, {}],
  cardCompanies: [{}],
};

export type CardType = keyof CardState;

export function getInitialCardStore() {
  return cloneDeep(initialCardState);
}
