import type { SecurityCodeState } from '@/contexts/CardContext';
import type { SecurityCode } from '@/types';

export function validateSecurityCode(securityCode?: SecurityCode) {
  if (!securityCode || securityCode.length !== 3) {
    return '보안번호 3자리를 입력해주세요.';
  }
}

export function checkIsSecurityCodeFulfilled(securityCodeState: SecurityCodeState) {
  const { errorMessage, value } = securityCodeState;
  return !errorMessage && value?.length === 3;
}
