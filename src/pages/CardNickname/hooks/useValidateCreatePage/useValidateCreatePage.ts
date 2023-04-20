import { useEffect } from 'react';

import { useCardContext } from '@/contexts/CardContext';
import { useRouterContext, useRouterContextApi } from '@/contexts';
import { useCardStatesValidator } from '@/hooks';
import { routes } from '@/router';

export function useValidateCreatePage() {
  const routerContext = useRouterContext();
  const routerContextApi = useRouterContextApi();
  const cardContext = useCardContext();
  const validateCardStates = useCardStatesValidator();

  useEffect(() => {
    if (routerContext?.params.cardId || !cardContext || !routerContextApi) return;

    const { cardCompany, cardNumbers, expireDates, cardOwner, passwords, securityCode } = cardContext;
    const isValidate = validateCardStates([
      ['cardCompany', cardCompany],
      ['cardNumbers', cardNumbers],
      ['expireDates', expireDates],
      ['cardOwner', cardOwner],
      ['securityCode', securityCode],
      ['passwords', passwords],
    ]);

    if (!isValidate) {
      alert('카드 정보가 유효하지 않습니다.');
      routerContextApi?.navigate(routes.cardCreator);
    }
  }, [routerContext, routerContextApi, cardContext, validateCardStates]);
}
