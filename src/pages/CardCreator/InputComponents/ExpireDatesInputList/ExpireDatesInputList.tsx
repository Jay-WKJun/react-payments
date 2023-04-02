import React, { memo } from 'react';

import type { TCardStore } from '@/contexts/CardContext/initialCardStore';
import type { ExpireMonthInputElement, ExpireYearInputElement } from '@/contexts/CardContext';

import { CardInputWrapperPure } from '../components';
import { ExpireMonthInput } from './ExpireMonthInput';
import { ExpireYearInput } from './ExpireYearInput';

interface ExpireDatesInputListProps {
  expireDates: TCardStore['expireDates'];
}

export const ExpireDatesInputList = memo(function ExpireDatesInputList({ expireDates }: ExpireDatesInputListProps) {
  const errorMessage = expireDates?.find((expireDate) => !!expireDate.errorMessage)?.errorMessage;

  return (
    <CardInputWrapperPure header="만료일" errorMessage={errorMessage}>
      <div className="input-box w-50">
        <ExpireMonthInput needDividerRender expireDate={expireDates[0] as ExpireMonthInputElement} index={0} />

        <ExpireYearInput expireDate={expireDates[1] as ExpireYearInputElement} index={1} />
      </div>
    </CardInputWrapperPure>
  );
});