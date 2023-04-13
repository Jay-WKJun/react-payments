import { CardOwnerState } from '@/contexts/CardContext';
import type { CardOwner } from '@/types';
import { isNil } from '@/utils';

export function validateCardOwner(cardOwner?: CardOwner) {
  if (isNil(cardOwner)) return;
  if (!cardOwner) {
    return '카드 소유주 이름을 입력해주세요.';
  }
}

export function checkIsCardOwnerFulfilled(cardOwnerState: CardOwnerState) {
  const { errorMessage, value } = cardOwnerState;
  return !errorMessage && value?.length === 30;
}
