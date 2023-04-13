import React, { ChangeEvent } from 'react';

import { CardPasswordState, useCardContextApis } from '@/contexts/CardContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';
import { checkIsPasswordFulfilled, validateCardPassword } from './cardPasswordChecker';
import { useSequentialFocus } from '@/pages/CardCreator/hooks';

interface PasswordInputProps {
  password: CardPasswordState;
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
  const { value, errorMessage } = password;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const { focusNext, setElement } = useSequentialFocus();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateCardPassword(value);
        const newPasswordState = { value, errorMessage };
        if (checkIsPasswordFulfilled(newPasswordState)) {
          focusNext('passwords', index);
        }

        cardContextApis?.setOneCardState({ type: 'passwords', index, newState: newPasswordState });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length < 2;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const handlePasswordInputFocus = () => {
    const errorMessage = validateCardPassword(value);
    cardContextApis?.setOneCardState({ type: 'passwords', index, newState: { ...password, errorMessage } });
  };

  return (
    <CardInfoInputElement
      type="password"
      className="input-basic w-15 mr-10"
      value={value ?? ''}
      ref={(el) => {
        setElement('passwords', index, el);
      }}
      changeEventProps={changeEventProps}
      error={{ isError }}
      onFocus={handlePasswordInputFocus}
    />
  );
}
