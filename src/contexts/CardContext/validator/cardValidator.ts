import type { CardState, CardStateUnitProperties, CardType } from '@/contexts/CardContext';
import type { CardCompany } from '@/types';

import { SetOneCardStateProps } from '../cardContext';
import { validateCardCompany } from './cardCompanyChecker';
import { validateCardNickname } from './cardNicknameChecker';
import { validateCardNumber } from './cardNumberChecker';
import { validateCardOwner } from './cardOwnerChecker';
import { validateCardPassword } from './cardPasswordChecker';
import { validateExpireMonth } from './expireMonthChecker';
import { validateExpireYear } from './expireYearChecker';
import { validateSecurityCode } from './securityCodeChecker';

class CardValidator {
  type: CardType;

  index: number;

  validator;

  constructor({ type, index = 0 }: { type: CardType; index?: number }) {
    this.type = type;
    this.index = index;
    this.validator = this.#chooseValidator(type, index);
  }

  #chooseValidator(type: CardType, index: number) {
    switch (type) {
      case 'cardCompany':
        return validateCardCompany;
      case 'cardNickname':
        return validateCardNickname;
      case 'cardNumbers':
        return validateCardNumber;
      case 'cardOwner':
        return validateCardOwner;
      case 'passwords':
        return validateCardPassword;
      case 'securityCode':
        return validateSecurityCode;
      case 'expireDates': {
        if (index === 0) return validateExpireMonth;
        return validateExpireYear;
      }
      default:
        throw new Error('need card State Type in CardValidator');
    }
  }

  validate(cardState?: CardCompany | string): string | undefined {
    // @ts-ignore
    return this.validator?.(cardState);
  }
}

export function cardValidator(cardState: [CardType, CardState[CardType]][]): SetOneCardStateProps | null {
  let invalidateCardState: SetOneCardStateProps | null = null;

  cardState.some(([type, state]) => {
    if (Array.isArray(state)) {
      const states = state;
      return states.some((state, index) => {
        return validateState(type, state, index);
      });
    }

    return validateState(type, state);
  });

  function validateState(type: CardType, { value }: CardStateUnitProperties, index?: number) {
    const cardValidator = new CardValidator({ type, index });
    const errorMessage = cardValidator.validate(value);

    if (errorMessage) {
      const { type, index } = cardValidator;
      // @ts-ignore
      invalidateCardState = { type, index, newState: { value, errorMessage } };
      return true;
    }

    return false;
  }

  return invalidateCardState;
}
