import React, { ChangeEvent, FocusEvent, memo } from 'react';

import {
  useCardContextApis,
  ExpireYearState,
  checkIsExpireYearFulfilled,
  validateExpireYear,
} from '@/contexts/CardContext';
import { useSequentialFocus } from '@/pages/CardCreator/hooks';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface ExpireYearInputProps {
  expireYear: ExpireYearState;
  index: number;
}

export const ExpireYearInput = memo(function ExpireYearInput({ expireYear, index }: ExpireYearInputProps) {
  const { value, errorMessage } = expireYear;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const { focusNext, setElement } = useSequentialFocus();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateExpireYear(value);
        const newExpireYear = { value, errorMessage };
        if (checkIsExpireYearFulfilled(newExpireYear)) {
          focusNext('expireDates', index);
        }

        cardContextApis?.setOneCardState({ type: 'expireDates', index, newState: newExpireYear });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length <= 2;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const blurEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateExpireYear(value);
        const newExpireYear = { value, errorMessage };
        if (checkIsExpireYearFulfilled(newExpireYear)) {
          focusNext('expireDates', index);
        }

        cardContextApis?.setOneCardState({ type: 'expireDates', index, newState: newExpireYear });
      },
    },
    checkWhetherSetState: (e: FocusEvent<HTMLInputElement>) => {
      const blurValue = e.currentTarget.value;
      return !!blurValue && blurValue.length === 1;
    },
    getNewValue: (e: FocusEvent<HTMLInputElement>) => {
      const blurValue = e.currentTarget.value;
      return blurValue.padStart(2, '0');
    },
  };

  const handleExpireYearInputFocus = () => {
    const errorMessage = validateExpireYear(value);
    cardContextApis?.setOneCardState({ type: 'expireDates', index, newState: { ...expireYear, errorMessage } });
  };

  return (
    <CardInfoInputElement
      type="text"
      value={value ?? ''}
      placeholder="년도"
      ref={(el) => {
        setElement(el, 'expireDates', index);
      }}
      changeEventProps={changeEventProps}
      blurEventProps={blurEventProps}
      error={{ isError }}
      onFocus={handleExpireYearInputFocus}
    />
  );
});
