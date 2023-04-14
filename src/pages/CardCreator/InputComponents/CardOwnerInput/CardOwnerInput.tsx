import React, { ChangeEvent, memo, useMemo } from 'react';

import { useCardContextApis, checkIsCardOwnerFulfilled, validateCardOwner, CardState } from '@/contexts/CardContext';

import { useSequentialFocus } from '../../hooks';
import { CardInputWrapperPure, CardInfoInputElement } from '../components';

interface CardOwnerInputProps {
  cardOwner: CardState['cardOwner'];
}

export const CardOwnerInput = memo(function CardOwnerInput({ cardOwner }: CardOwnerInputProps) {
  const isError = !!cardOwner.errorMessage;

  const cardContextApis = useCardContextApis();

  const { focusNext, setElement } = useSequentialFocus();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateCardOwner(value);
        const newCardOwnerState = { value, errorMessage };
        if (checkIsCardOwnerFulfilled(newCardOwnerState)) {
          focusNext('cardOwner');
        }

        cardContextApis?.setOneCardState({ type: 'cardOwner', newState: newCardOwnerState });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      return !value || value.length <= 30;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return e.currentTarget.value;
    },
  };

  const handleCardOwnerInputFocus = () => {
    const errorMessage = validateCardOwner(cardOwner?.value);
    cardContextApis?.setOneCardState({ type: 'cardOwner', newState: { ...cardOwner, errorMessage } });
  };

  const inputHeader = useMemo(
    () => ['카드 소유자 이름(선택)', `${cardOwner?.value?.length || 0} / 30`],
    [cardOwner?.value]
  );

  return (
    <CardInputWrapperPure header={inputHeader} errorMessage={cardOwner.errorMessage}>
      <CardInfoInputElement
        type="text"
        className="input-basic"
        value={cardOwner?.value ?? ''}
        placeholder="소유주 이름"
        ref={(el) => {
          setElement(el, 'cardOwner');
        }}
        changeEventProps={changeEventProps}
        error={{ isError }}
        onFocus={handleCardOwnerInputFocus}
      />
    </CardInputWrapperPure>
  );
});
