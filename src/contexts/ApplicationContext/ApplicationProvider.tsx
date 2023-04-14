import React, { PropsWithChildren, useMemo } from 'react';

import type { ApplicationContextProps } from './type';
import { ApplicationContext } from './applicationContext';

export function ApplicationProvider({
  cardList,
  onCardConfirm,
  onCardDelete,
  onCardUpdate,
  onCardSubmit,
  children,
}: PropsWithChildren<ApplicationContextProps>) {
  const AppContextValue = useMemo(() => {
    return { cardList, onCardConfirm, onCardUpdate, onCardDelete, onCardSubmit };
  }, [cardList, onCardConfirm, onCardDelete, onCardSubmit, onCardUpdate]);

  return <ApplicationContext.Provider value={AppContextValue}>{children}</ApplicationContext.Provider>;
}
