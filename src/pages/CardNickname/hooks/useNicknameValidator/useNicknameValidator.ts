import { useCallback } from 'react';

import { useCardContext, useCardContextApis } from '@/contexts/CardContext';

export function useNicknameValidator() {
  const cardContext = useCardContext();
  const cardContextApis = useCardContextApis();

  return useCallback(() => {
    if (!cardContext) return;

    const { cardNickname, cardCompany } = cardContext;

    if (!cardNickname || !cardNickname.value) {
      cardContextApis?.setOneCardState({ type: 'cardNickname', index: 0, newState: { value: cardCompany.value } });
    }
  }, [cardContext, cardContextApis]);
}
