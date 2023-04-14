import React, { ChangeEvent, HTMLInputTypeAttribute, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components';
import {
  CardNumberState,
  useCardContextApis,
  checkIsCardNumberFulfilled,
  validateCardNumber,
} from '@/contexts/CardContext';
import { useSequentialFocus } from '@/pages/CardCreator/hooks';
import { filterNumber } from '@/utils';

import { InputDivider, CardInfoInputElement } from '../../components';

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
  const { value, errorMessage } = cardNumber;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const { focusNext, setElement } = useSequentialFocus();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateCardNumber(value);

        if (checkIsCardNumberFulfilled({ value, errorMessage })) {
          focusNext('cardNumbers', index);
        }
        cardContextApis?.setOneCardState({ type: 'cardNumbers', index, newState: { value, errorMessage } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length <= 4;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const handleCardNumberInputFocus = () => {
    const errorMessage = validateCardNumber(value);
    cardContextApis?.setOneCardState({ type: 'cardNumbers', index, newState: { ...cardNumber, errorMessage } });
  };

  return (
    <>
      <CardInfoInputElement
        type={type}
        value={value ?? ''}
        ref={(el) => {
          if (el) setElement(el, 'cardNumbers', index);
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
