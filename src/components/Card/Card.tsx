import React, { memo, MouseEvent, ReactElement } from 'react';

import { ThemeSetter } from '@/components';

import { CardNumbers } from './CardNumbers';
import { CardOwnerName } from './CardOwnerName';
import { CardExpireDate } from './CardExpireDate';
import { CardNickname } from './CardNickname';
import type { ExpireDateProp, CardNumberProp, CardCompanyProp, CardOwnerProp, CardNicknameProp } from './types';
import {
  StyledCard,
  StyledEmptyCardCompany,
  StyledCardTop,
  StyledCardMiddle,
  StyledCardBottom,
  StyledCardBottomInfo,
  StyledCardChip,
  cardThemeWrapperStyle,
} from './Card.styled';

interface CardProps {
  disableNickname?: boolean;
  additionalIcon?: ReactElement;
  additionalBottomElement?: ReactElement;
  cardCompany?: CardCompanyProp;
  cardNumbers?: CardNumberProp;
  cardOwnerName?: CardOwnerProp;
  cardExpireDate?: ExpireDateProp;
  cardNickname?: CardNicknameProp;
  onCardClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const Card = memo(function Card({
  disableNickname,
  additionalIcon,
  additionalBottomElement,
  cardCompany,
  cardNumbers,
  cardOwnerName,
  cardExpireDate,
  cardNickname,
  onCardClick,
}: CardProps) {
  return (
    <ThemeSetter className={cardThemeWrapperStyle()} theme={cardCompany?.theme} onClick={onCardClick}>
      <StyledCard pointCursor={!!onCardClick}>
        <StyledCardTop>{cardCompany?.name}</StyledCardTop>
        <StyledCardMiddle>
          <StyledCardChip />
          {!cardCompany && <StyledEmptyCardCompany>{`이곳을 눌러 \n카드사를 선택해주세요`}</StyledEmptyCardCompany>}
        </StyledCardMiddle>
        <StyledCardBottom>
          <CardNumbers cardNumbers={cardNumbers} />
          <StyledCardBottomInfo>
            <CardOwnerName ownerName={cardOwnerName} />
            <CardExpireDate expireDates={cardExpireDate} />
          </StyledCardBottomInfo>
        </StyledCardBottom>
        {additionalIcon}
      </StyledCard>
      {disableNickname || <CardNickname nickname={cardNickname} />}
      {additionalBottomElement}
    </ThemeSetter>
  );
});
