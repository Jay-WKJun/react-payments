import type { CardPasswordState } from '@/contexts/CardContext';
import type { CardPassword } from '@/types';
import { isNil } from '@/utils';

export function validateCardPassword(cardPassword?: CardPassword) {
  if (isNil(cardPassword)) return;

  if (!cardPassword) {
    return '비밀번호를 입력해주세요.';
  }
}

export function checkIsPasswordFulfilled(cardPasswordState: CardPasswordState) {
  const { errorMessage, value } = cardPasswordState;
  return !errorMessage && value?.length === 1;
}
