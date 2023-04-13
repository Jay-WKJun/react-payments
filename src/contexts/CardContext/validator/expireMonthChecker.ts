import type { ExpireMonthState } from '@/contexts/CardContext';
import type { ExpireMonth } from '@/types';

export function validateExpireMonth(expireMonth?: ExpireMonth) {
  const numberedValue = Number(expireMonth);
  if (!(numberedValue >= 1 && numberedValue <= 12)) {
    return '1월 ~ 12월중에 입력해주세요.';
  }
}

export function checkIsExpireMonthFulfilled(expireMonthState: ExpireMonthState) {
  const { errorMessage, value } = expireMonthState;
  return !errorMessage && value?.length === 2;
}
