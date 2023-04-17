import React from 'react';

import { themes } from '@/theme';
import type { CardCompany as CardCompanyModel } from '@/types';

import { StyledCardCompany, StyledCardCompanyColor, StyledCardCompanyName } from './CardCompany.styled';

interface CardCompanyProps {
  cardCompany: CardCompanyModel;
  onClick?: (cardCompany: CardCompanyModel) => void;
}

export function CardCompany({ cardCompany, onClick }: CardCompanyProps) {
  if (!cardCompany) return null;

  const { theme } = cardCompany;

  return (
    <StyledCardCompany
      onClick={() => {
        if (onClick) onClick(cardCompany);
      }}
    >
      <StyledCardCompanyColor className={themes[theme]} />
      <StyledCardCompanyName>{cardCompany?.name}</StyledCardCompanyName>
    </StyledCardCompany>
  );
}
