import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useFetchCardList } from '@/hooks/useFetchCardList';
import { routes } from '@/router';
import { useCardContextApis } from '@/contexts/CardContext';

export function useValidateUpdatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const cardContextApis = useCardContextApis();

  const { cardList } = useFetchCardList();

  useEffect(
    function checkIfCorrectPageAccess() {
      if (!cardId || !cardList) return;

      const card = cardList[cardId];
      if (!card) {
        alert('해당 카드가 존재하지 않습니다.');
        navigate(routes.home);
      }
    },
    [cardId, cardList, navigate, cardContextApis]
  );
}
