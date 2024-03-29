import React, { ChangeEvent } from 'react';

import {
  CardPasswordState,
  useCardContextApis,
  checkIsPasswordFulfilled,
  validateCardPassword,
} from '@/contexts/CardContext';
import { useSequentialFocus } from '@/pages/CardCreator/hooks';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';
import { passwordInputStyle } from './PasswordInput.styled';

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
      className={passwordInputStyle()}
      value={value ?? ''}
      ref={(el) => {
        setElement(el, 'passwords', index);
      }}
      changeEventProps={changeEventProps}
      error={{ isError }}
      onFocus={handlePasswordInputFocus}
    />
  );
}
