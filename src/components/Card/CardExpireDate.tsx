import React from 'react';

import { padNumber } from '@/utils';

import type { ExpireDateProp } from './types';
import { StyledExpireDateWrapper, StyledExpireDate, StyledCardText } from './CardExpireDate.styled';

interface CardExpireDateProps {
  expireDates?: ExpireDateProp;
}

export function CardExpireDate({ expireDates }: CardExpireDateProps) {
  return (
    <StyledExpireDateWrapper>
      <StyledExpireDate>{padNumber(2, expireDates?.[0])}</StyledExpireDate>
      <StyledCardText css={{ marginLeft: '5px', marginRight: '5px' }}>/</StyledCardText>
      <StyledExpireDate>{padNumber(2, expireDates?.[1])}</StyledExpireDate>
    </StyledExpireDateWrapper>
  );
}
