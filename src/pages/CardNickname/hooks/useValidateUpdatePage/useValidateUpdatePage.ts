import { useEffect } from 'react';

import {
  convertCardToCardState,
  useCardContextApis,
  useApplicationContext,
  useRouterContextApi,
  useRouterContext,
} from '@/contexts';
import { routes } from '@/router';

export function useValidateUpdatePage() {
  const routerContext = useRouterContext();
  const routerContextApi = useRouterContextApi();
  const appContext = useApplicationContext();
  const cardContextApis = useCardContextApis();

  useEffect(
    function checkIfCorrectPageAccess() {
      const cardList = appContext?.cardList;
      const cardId = routerContext?.params.cardId;

      if (!cardId || !cardList || !routerContextApi) return;

      const card = cardList[cardId];
      if (!card) {
        alert('해당 카드가 존재하지 않습니다.');
        routerContextApi.navigate(routes.home);
        return;
      }

      const cardState = convertCardToCardState(card);
      cardContextApis?.setCardState(cardState);
    },
    [cardContextApis, appContext, routerContext, routerContextApi]
  );
}
