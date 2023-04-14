import React, { ChangeEvent } from 'react';

import {
  useCardContextApis,
  SecurityCodeState,
  checkIsSecurityCodeFulfilled,
  validateSecurityCode,
} from '@/contexts/CardContext';
import { useSequentialFocus } from '@/pages/CardCreator/hooks';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface SecurityCodeInputProps {
  securityCode: SecurityCodeState;
  index?: number;
}

export function SecurityCodeInput({ securityCode, index = 0 }: SecurityCodeInputProps) {
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
          focusNext('securityCodes', index);
        }

        cardContextApis?.setOneCardState({ type: 'securityCodes', index, newState: newSecurityCodeState });
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
    cardContextApis?.setOneCardState({ type: 'securityCodes', index, newState: { ...securityCode, errorMessage } });
  };

  return (
    <CardInfoInputElement
      className="input-basic w-25"
      type="password"
      value={value ?? ''}
      ref={(el) => {
        setElement('securityCodes', index, el);
      }}
      changeEventProps={changeEventProps}
      error={{ isError }}
      onFocus={handleSecurityCodeInputFocus}
    />
  );
}
