import React, { memo, MouseEvent, ReactElement } from 'react';

import { ThemeSetter } from '@/components';

import { CardNumbers } from './CardNumbers';
import { CardOwnerName } from './CardOwnerName';
import { CardExpireDate } from './CardExpireDate';
import { CardNickname } from './CardNickname';
import type { ExpireDateProp, CardNumberProp, CardCompanyProp, CardOwnerProp, CardNicknameProp } from './types';
import { StyledCard, StyledEmptyCardCompany, cardThemeWrapperStyle } from './Card.styled';

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
        <div className="card-top">{cardCompany?.name}</div>
        <div className="card-middle">
          <div className="small-card__chip" />
          {!cardCompany && <StyledEmptyCardCompany>{`이곳을 눌러 \n카드사를 선택해주세요`}</StyledEmptyCardCompany>}
        </div>
        <div className="card-bottom">
          <CardNumbers cardNumbers={cardNumbers} />
          <div className="card-bottom__info">
            <CardOwnerName ownerName={cardOwnerName} />
            <CardExpireDate expireDates={cardExpireDate} />
          </div>
        </div>
        {additionalIcon}
      </StyledCard>
      {disableNickname || <CardNickname nickname={cardNickname} />}
      {additionalBottomElement}
    </ThemeSetter>
  );
});
