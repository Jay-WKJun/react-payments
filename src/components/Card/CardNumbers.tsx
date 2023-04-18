import React from 'react';

import { CardNumberProp } from './types';
import { StyledCardNumbersContainer, StyledCardNumberWrapper } from './CardNumbers.styled';

interface CardNumbersProps {
  cardNumbers?: CardNumberProp;
}

export function CardNumbers({ cardNumbers }: CardNumbersProps) {
  return (
    <StyledCardNumbersContainer>
      {cardNumbers?.map((cardNumber, i) => {
        const isHide = i >= 2;
        return <CardNumber key={`card-number-${i}-${cardNumber}`} hide={isHide} value={cardNumber} />;
      })}
    </StyledCardNumbersContainer>
  );
}

function CardNumber({ hide, value }: { hide: boolean; value: CardNumberProp[number] }) {
  return <StyledCardNumberWrapper>{value && makeCardNumber(value, hide)}</StyledCardNumberWrapper>;
}

function makeCardNumber(value: string, isHide: boolean) {
  if (isHide) {
    return '*'.repeat(value.length);
  }
  return value;
}
