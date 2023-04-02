import React, { ChangeEvent } from 'react';

import { useCardContextApis, SecurityCodeInputElement } from '@/contexts/CardContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface SecurityCodeInputProps {
  securityCode: SecurityCodeInputElement;
}

export function SecurityCodeInput({ securityCode }: SecurityCodeInputProps) {
  const { value, setRef, errorMessage } = securityCode;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        cardContextApis?.dispatch({ type: 'securityCodes', payload: { value } });
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
    cardContextApis?.dispatch({ type: 'securityCodes', payload: { value: value || '' } });
  };

  return (
    <CardInfoInputElement
      className="input-basic w-25"
      type="password"
      value={value ?? ''}
      ref={setRef.bind(securityCode)}
      changeEventProps={changeEventProps}
      error={{ isError }}
      onFocus={handleSecurityCodeInputFocus}
    />
  );
}