import { useCallback } from 'react';

import { useCardContext, useCardContextApis } from '@/contexts/CardContext';

export function useNicknameValidator() {
  const cardContext = useCardContext();
  const cardContextApis = useCardContextApis();

  return useCallback(() => {
    if (!cardContext) return;

    const { cardNicknames, cardCompanies } = cardContext;
    const cardCompany = cardCompanies[0];
    const cardNickname = cardNicknames[0];

    if (!cardNickname || !cardNickname.value) {
      cardContextApis?.setOneCardState({ type: 'cardNicknames', index: 0, newState: { value: cardCompany.value } });
    }
  }, [cardContext, cardContextApis]);
}
