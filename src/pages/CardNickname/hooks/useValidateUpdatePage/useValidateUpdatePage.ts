import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { convertCardToCardState, useCardContextApis, useApplicationContext } from '@/contexts';
import { routes } from '@/router';

export function useValidateUpdatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const appContext = useApplicationContext();
  const cardContextApis = useCardContextApis();

  useEffect(
    function checkIfCorrectPageAccess() {
      const cardList = appContext?.cardList;

      if (!cardId || !cardList) return;

      const card = cardList[cardId];
      if (!card) {
        alert('해당 카드가 존재하지 않습니다.');
        navigate(routes.home);
        return;
      }

      const cardState = convertCardToCardState(card);
      cardContextApis?.setCardState(cardState);
    },
    [cardId, navigate, cardContextApis, appContext]
  );
}
