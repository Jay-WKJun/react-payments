import React, { ChangeEvent, memo } from 'react';

import {
  CardState,
  useCardContextApis,
  checkIsSecurityCodeFulfilled,
  validateSecurityCode,
} from '@/contexts/CardContext';
import { useSequentialFocus } from '@/pages/CardCreator/hooks';
import { filterNumber } from '@/utils';

import { CardInputWrapperPure, CardInfoInputElement } from '../components';
import { SecurityCodeTooltip } from './SecurityCodeTooltip';
import { StyledSecurityCodeInputContainer } from './SecurityCodeInput.styled';

interface SecurityCodeInputProps {
  securityCode: CardState['securityCode'];
}

export const SecurityCodeInput = memo(function SecurityCodeInput({ securityCode }: SecurityCodeInputProps) {
  const { value, errorMessage } = securityCode;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const { focusNext, setElement } = useSequentialFocus();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateSecurityCode(value);
        const newSecurityCodeState = { value, errorMessage };

        if (checkIsSecurityCodeFulfilled(newSecurityCodeState)) {
          focusNext('securityCode');
        }

        cardContextApis?.setOneCardState({ type: 'securityCode', newState: newSecurityCodeState });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length <= 3;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const handleSecurityCodeInputFocus = () => {
    const errorMessage = validateSecurityCode(value);
    cardContextApis?.setOneCardState({ type: 'securityCode', newState: { ...securityCode, errorMessage } });
  };

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)" errorMessage={securityCode.errorMessage}>
      <StyledSecurityCodeInputContainer>
        <CardInfoInputElement
          className="input-basic w-25"
          type="password"
          value={value ?? ''}
          ref={(el) => {
            setElement(el, 'securityCode');
          }}
          changeEventProps={changeEventProps}
          error={{ isError }}
          onFocus={handleSecurityCodeInputFocus}
        />
        <SecurityCodeTooltip />
      </StyledSecurityCodeInputContainer>
    </CardInputWrapperPure>
  );
});
