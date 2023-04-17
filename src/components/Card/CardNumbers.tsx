import React from 'react';

import { CardNumberProp } from './types';

interface CardNumbersProps {
  cardNumbers?: CardNumberProp;
}

export function CardNumbers({ cardNumbers }: CardNumbersProps) {
  return (
    <div className="card-bottom__number">
      {cardNumbers?.map((cardNumber, i) => {
        const isHide = i >= 2;
        return <CardNumber key={`card-number-${i}-${cardNumber}`} hide={isHide} value={cardNumber} />;
      })}
    </div>
  );
}

function CardNumber({ hide, value }: { hide: boolean; value: CardNumberProp[number] }) {
  return <span className="card-number-wrapper card-number-spacing">{value && makeCardNumber(value, hide)}</span>;
}

function makeCardNumber(value: string, isHide: boolean) {
  if (isHide) {
    return '*'.repeat(value.length);
  }
  return value;
}
