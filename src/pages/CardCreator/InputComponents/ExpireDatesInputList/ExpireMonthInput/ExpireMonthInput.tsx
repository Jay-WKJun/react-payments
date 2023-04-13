import React, { ChangeEvent, FocusEvent, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components';
import { useCardContextApis, ExpireMonthState } from '@/contexts/CardContext';
import { filterNumber, isNil } from '@/utils';

import { InputDivider, CardInfoInputElement } from '../../components';
import { checkIsExpireMonthFulfilled, validateExpireMonth } from './expireMonthChecker';
import { useSequentialFocus } from '@/pages/CardCreator/hooks';

interface ExpireMonthInputProps {
  expireMonth: ExpireMonthState;
  index: number;
  needDividerRender: boolean;
}

export const ExpireMonthInput = memo(function ExpireMonthInput({
  expireMonth,
  index,
  needDividerRender,
}: ExpireMonthInputProps) {
  const { value, errorMessage } = expireMonth;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const { focusNext, setElement } = useSequentialFocus();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateExpireMonth(value);
        const newExpireMonthState = { value, errorMessage };
        if (checkIsExpireMonthFulfilled(newExpireMonthState)) {
          focusNext('expireDates', index);
        }

        cardContextApis?.setOneCardState({ type: 'expireDates', index, newState: newExpireMonthState });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      if (isNil(filteredNumber) || filteredNumber.length === 0) return true;

      const isInputLengthValid = filteredNumber.length <= 2;
      const numberedInput = Number(filteredNumber);
      const isMinNumberValid = numberedInput >= 0;
      const isMaxNumberValid = numberedInput <= 12;
      return isInputLengthValid && isMinNumberValid && isMaxNumberValid;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const blurEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateExpireMonth(value);
        const newExpireMonthState = { value, errorMessage };
        if (checkIsExpireMonthFulfilled(newExpireMonthState)) {
          focusNext('expireDates', index);
        }

        cardContextApis?.setOneCardState({ type: 'expireDates', index, newState: newExpireMonthState });
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

  const handleExpireMonthInputFocus = () => {
    const errorMessage = validateExpireMonth(value);
    cardContextApis?.setOneCardState({ type: 'expireDates', index, newState: { ...expireMonth, errorMessage } });
  };

  return (
    <>
      <CardInfoInputElement
        className="input-basic"
        type="text"
        value={value ?? ''}
        placeholder="월"
        ref={(el) => {
          setElement('expireDates', index, el);
        }}
        changeEventProps={changeEventProps}
        blurEventProps={blurEventProps}
        error={{ isError }}
        onFocus={handleExpireMonthInputFocus}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider hiding={isError}>/</InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
