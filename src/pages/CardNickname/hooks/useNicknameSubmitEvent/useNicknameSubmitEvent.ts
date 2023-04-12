import { MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useCardContext } from '@/contexts/CardContext';
import { useFetchCardList } from '@/hooks';
import { routes } from '@/router';

export function useNicknameSubmitEvent() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const cardContext = useCardContext();

  const { postCard } = useFetchCardList();

  return (e: MouseEvent<HTMLElement>) => {
    if (!cardContext) return;

    const { cardNicknames, cardCompanies, cardNumbers, expireDates, cardOwners, passwords, securityCodes } =
      cardContext;
    const cardNickname = cardNicknames[0];
    if (cardNickname.errorMessage) {
      e.preventDefault();
    }
  };
}
