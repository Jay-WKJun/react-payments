import React, { MouseEvent, useCallback, useMemo, useState } from 'react';

import { Card, CloseIcon } from '@/components';
import { useApplicationContext, Card as CardModel } from '@/contexts';
import type { CardCompany } from '@/types';

import { useFlushCardContextStore } from './hooks';
import { EmptyCard } from './EmptyCard';
import { CardModal, TCardModalDTO } from './CardModal';
import { StyledDeleteButton, StyledCardListContainer, StyledCardListWrapper } from './CardList.styled';

export function CardList() {
  useFlushCardContextStore();

  const [selectedCard, setSelectedCard] = useState<TCardModalDTO | null>();

  const appContext = useApplicationContext();
  const cardList = appContext?.cardList;

  const sortCardListToDescendingOrderOfKey = useMemo(
    () => cardList && Object.entries(cardList).sort(sortDescendingOrderByKeys),
    [cardList]
  );

  const createCardClickHandler = useCallback(
    (key: string) => () => {
      if (!cardList) return;
      setSelectedCard({ id: key, card: cardList[key] });
    },
    [cardList]
  );

  const createCardDeleteButtonClickHandler = useCallback(
    (card: CardModel, cardId: string) => (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      appContext?.onCardDelete(card, cardId);
    },
    [appContext]
  );

  if (!appContext) return null;

  return (
    <StyledCardListContainer>
      <StyledCardListWrapper>
        <EmptyCard />
        {sortCardListToDescendingOrderOfKey?.map(([cardId, card]) => (
          <Card
            key={cardId}
            cardCompany={card?.cardCompany as CardCompany}
            cardExpireDate={card?.expireDates}
            cardNumbers={card.cardNumbers}
            cardOwnerName={card?.cardOwner}
            cardNickname={card?.cardNickname}
            onCardClick={createCardClickHandler(cardId)}
            additionalIcon={
              <StyledDeleteButton onClick={createCardDeleteButtonClickHandler(card, cardId)}>
                <CloseIcon />
              </StyledDeleteButton>
            }
          />
        ))}
      </StyledCardListWrapper>

      <CardModal cardInfo={selectedCard} onModalHide={() => setSelectedCard(null)} />
    </StyledCardListContainer>
  );
}

function sortDescendingOrderByKeys([aKey]: [string, any], [bKey]: [string, any]) {
  if (aKey > bKey) return -1;
  if (aKey === bKey) return 0;
  return 1;
}
