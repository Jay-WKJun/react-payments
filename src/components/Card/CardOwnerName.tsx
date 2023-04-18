import React from 'react';

import { CardOwnerProp } from './types';
import { StyledCardOwnerName } from './CardOwnerName.styled';

interface CardOwnerNameProps {
  ownerName?: CardOwnerProp;
}

export function CardOwnerName({ ownerName }: CardOwnerNameProps) {
  return <StyledCardOwnerName>{ownerName || 'NAME'}</StyledCardOwnerName>;
}
