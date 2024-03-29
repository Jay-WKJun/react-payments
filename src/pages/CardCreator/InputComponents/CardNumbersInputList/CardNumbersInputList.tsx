import React, { memo } from 'react';

import type { CardState } from '@/contexts/CardContext';
import { checkIsArrayLast } from '@/utils';

import { CardInputWrapperPure } from '../components';
import { CardNumberInput } from './CardNumberInput';
import { StyledCardNumbersContainer } from './CardNumbersInputList.styled';

export interface CardNumbersInputListRefs {
  checkIsEveryInputValid: () => boolean;
}

interface CardNumbersInputListProps {
  cardNumbers?: CardState['cardNumbers'];
}

export const CardNumbersInputList = memo(function CardNumbersInputList({ cardNumbers }: CardNumbersInputListProps) {
  const errorMessage = cardNumbers?.find((cardNumber) => !!cardNumber.errorMessage)?.errorMessage;

  return (
    <CardInputWrapperPure header="카드 번호" errorMessage={errorMessage}>
      <StyledCardNumbersContainer>
        {cardNumbers?.map((cardNumber, i) => {
          const isLast = checkIsArrayLast(cardNumbers, i);
          const isPasswordType = i >= cardNumbers.length - 2;
          return (
            <CardNumberInput
              key={`cardNumber-input-${i}`}
              type={isPasswordType ? 'password' : 'text'}
              needDividerRender={!isLast}
              cardNumber={cardNumber}
              index={i}
            />
          );
        })}
      </StyledCardNumbersContainer>
    </CardInputWrapperPure>
  );
});
