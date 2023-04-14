import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useCardContext } from '@/contexts/CardContext';
import { useCardStatesValidator } from '@/hooks';
import { routes } from '@/router';

export function useValidateCreatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const cardContext = useCardContext();
  const validateCardStates = useCardStatesValidator();

  useEffect(() => {
    if (cardId || !cardContext || !navigate) return;

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
      navigate(routes.cardCreator);
    }
  }, [cardId, navigate, cardContext, validateCardStates]);
}
