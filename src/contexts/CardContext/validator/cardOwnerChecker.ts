import { CardOwnerState } from '@/contexts/CardContext';
import type { CardOwner } from '@/types';

export function validateCardOwner(cardOwner?: CardOwner) {
  if (!cardOwner) {
    return '카드 소유주 이름을 입력해주세요.';
  }
}

export function checkIsCardOwnerFulfilled(cardOwnerState: CardOwnerState) {
  const { errorMessage, value } = cardOwnerState;
  return !errorMessage && value?.length === 30;
}
