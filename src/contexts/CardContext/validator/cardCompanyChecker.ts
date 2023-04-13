import type { CardCompany } from '@/types';
import { isNil } from '@/utils';

export function validateCardCompany(cardCompany?: CardCompany) {
  if (isNil(cardCompany)) {
    return '카드사를 선택해주세요.';
  }
}
