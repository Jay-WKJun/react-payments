import type { CardNumber } from '@/types';
import type { CardNumberState } from '@/contexts/CardContext';

export function validateCardNumber(cardNumber?: CardNumber) {
  if (!cardNumber || cardNumber.length !== 4) {
    return '카드 번호 4자리를 입력해주세요.';
  }
}

export function checkIsCardNumberFulfilled(cardNumberState: CardNumberState) {
  const { errorMessage, value } = cardNumberState;
  return !errorMessage && value?.length === 4;
}
