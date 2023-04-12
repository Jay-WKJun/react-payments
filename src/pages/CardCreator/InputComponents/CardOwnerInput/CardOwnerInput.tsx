import React, { ChangeEvent, memo, useMemo } from 'react';

import { useCardContextApis } from '@/contexts/CardContext';
import { CardState } from '@/contexts/CardContext/initialCardStore';

import { CardInputWrapperPure, CardInfoInputElement } from '../components';
import { checkIsCardOwnerFulfilled, validateCardOwner } from './cardOwnerChecker';
import { useSequentialFocus } from '../../hooks';

interface CardOwnerInputProps {
  cardOwners: CardState['cardOwners'];
}

export const CardOwnerInput = memo(function CardOwnerInput({ cardOwners }: CardOwnerInputProps) {
  const cardOwner = useMemo(() => cardOwners[0], [cardOwners]);
  const isError = !!cardOwner.errorMessage;

  const cardContextApis = useCardContextApis();

  const { focusNext, setRef } = useSequentialFocus();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const errorMessage = validateCardOwner(value);
        const newCardOwnerState = { value, errorMessage };
        if (checkIsCardOwnerFulfilled(newCardOwnerState)) {
          focusNext('cardOwners', 0);
        }

        cardContextApis?.setOneCardState({ type: 'cardOwners', index: 0, newState: newCardOwnerState });
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
    cardContextApis?.setOneCardState({ type: 'cardOwners', index: 0, newState: { ...cardOwner, errorMessage } });
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
          setRef('cardOwners', 0, el);
        }}
        changeEventProps={changeEventProps}
        error={{ isError }}
        onFocus={handleCardOwnerInputFocus}
      />
    </CardInputWrapperPure>
  );
});
