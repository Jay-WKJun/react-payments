import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { routes } from '@/router';
import { useCardContext } from '@/contexts/CardContext';

export function useValidateCreatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const cardStore = useCardContext();

  useEffect(() => {
    if (cardId || !cardStore || !navigate) return;

    const { cardCompanies, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardStore;
  }, [cardId, navigate, cardStore]);
}
