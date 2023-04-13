import React, { ChangeEvent, HTMLInputTypeAttribute, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components';
import { CardNumberState, useCardContextApis } from '@/contexts/CardContext';
import { filterNumber } from '@/utils';

import { InputDivider, CardInfoInputElement } from '../../components';
import { checkIsValueFulfilled, validateCardNumber } from './cardNumberChecker';
import { useSequentialFocus } from '@/pages/CardCreator/hooks';
import { log } from 'console';

interface CardNumberProps {
  type?: HTMLInputTypeAttribute;
  cardNumber: CardNumberState;
  index: number;
  needDividerRender: boolean;
}

export const CardNumberInput = memo(function CardNumberInput({
  type = 'text',
  cardNumber,
  index,
  needDividerRender,
}: CardNumberProps) {
  console.log('droped State:', cardNumber)
  const { value, errorMessage } = cardNumber;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const { focusNext, setElement } = useSequentialFocus();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateCardNumber(value);

        if (checkIsValueFulfilled({ value, errorMessage })) {
          focusNext('cardNumbers', index);
        }
        console.log(value)
        cardContextApis?.setOneCardState({ type: 'cardNumbers', index, newState: { value, errorMessage } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length <= 4;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.currentTarget.value)
      return filterNumber(e.currentTarget.value);
    },
  };

  const handleCardNumberInputFocus = () => {
    const errorMessage = validateCardNumber(value);
    cardContextApis?.setOneCardState({ type: 'cardNumbers', index, newState: { ...cardNumber, errorMessage } });
  };
console.log('drop', value)
  return (
    <>
      <CardInfoInputElement
        type={type}
        value={value ?? ''}
        ref={(el) => {
          if (el) setElement('cardNumbers', index, el);
        }}
        className="input-basic"
        changeEventProps={changeEventProps}
        error={{ isError }}
        onFocus={handleCardNumberInputFocus}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider hiding={isError} className="dash">
          -
        </InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
