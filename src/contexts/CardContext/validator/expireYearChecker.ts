import type { ExpireYearState } from '@/contexts/CardContext';
import type { ExpireYear } from '@/types';
import { convertStringToNumber, getYearFormatYY } from '@/utils';

export function validateExpireYear(expireYear?: ExpireYear) {
  if (!expireYear) {
    return '만료 연도를 입력해주세요.';
  }

  const numberedYear = convertStringToNumber(expireYear) as number;
  const currentYearYY = getYearFormatYY();
  if (numberedYear <= currentYearYY) {
    return `${currentYearYY}년 이후 연도를 입력해주세요.`;
  }
}

export function checkIsExpireYearFulfilled(expireYearState: ExpireYearState) {
  const { errorMessage, value } = expireYearState;
  return !errorMessage && value?.length === 2;
}
