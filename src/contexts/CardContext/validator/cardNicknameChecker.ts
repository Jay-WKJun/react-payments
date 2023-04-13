import type { CardNickname } from '@/types';
import { isNil } from '@/utils';

export function validateCardNickname(cardNickname?: CardNickname) {
  if (isNil(cardNickname)) {
    return '카드 이름을 입력해주세요.';
  }
}
