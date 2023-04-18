import React, { memo } from 'react';

import type { CardState } from '@/contexts/CardContext';

import { CardInputWrapperPure } from '../components';
import { ExpireMonthInput } from './ExpireMonthInput';
import { ExpireYearInput } from './ExpireYearInput';
import { StyledExpireDatesContainer } from './ExpireDatesInputList.styled';

interface ExpireDatesInputListProps {
  expireDates: CardState['expireDates'];
}

export const ExpireDatesInputList = memo(function ExpireDatesInputList({ expireDates }: ExpireDatesInputListProps) {
  const errorMessage = expireDates?.find((expireDate) => !!expireDate.errorMessage)?.errorMessage;

  return (
    <CardInputWrapperPure header="만료일" errorMessage={errorMessage}>
      <StyledExpireDatesContainer>
        <ExpireMonthInput needDividerRender expireMonth={expireDates[0]} index={0} />

        <ExpireYearInput expireYear={expireDates[1]} index={1} />
      </StyledExpireDatesContainer>
    </CardInputWrapperPure>
  );
});
