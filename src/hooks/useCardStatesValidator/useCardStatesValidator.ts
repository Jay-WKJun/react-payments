import { useCallback } from 'react';

import { cardValidator, useCardContextApis } from '@/contexts/CardContext';

export function useCardStatesValidator() {
  const cardContextApis = useCardContextApis();

  return useCallback(
    (cardStore: Parameters<typeof cardValidator>[0]) => {
      if (!cardContextApis) {
        throw new Error('need Card Context And Card Api Context');
      }

      const errorState = cardValidator(cardStore);

      if (errorState) {
        cardContextApis?.setOneCardState(errorState);
        return false;
      }

      return true;
    },
    [cardContextApis]
  );
}
