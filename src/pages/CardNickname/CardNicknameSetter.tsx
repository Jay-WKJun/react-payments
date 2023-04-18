import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from '@/components';
import { useCardContext, useApplicationContext, convertCardStateToCard, CardState } from '@/contexts';
import type { ExpireMonth, ExpireYear } from '@/types';

import { useValidateCreatePage, useValidateUpdatePage } from './hooks';
import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';
import {
  StyledCarNicknameSetterWrapper,
  StyledNicknameSetterHeader,
  StyledNicknameSetterHeaderWrapper,
} from './CardNicknameSetter.styled';

export function CardNicknameSetter() {
  useValidateCreatePage();
  useValidateUpdatePage();

  const cardContext = useCardContext();
  const appContext = useApplicationContext();
  const { cardId } = useParams();

  const handleSubmitCard = useCallback(() => {
    if (!cardContext) return;

    const finalNickname = getFinalNickname(cardContext);
    cardContext.cardNickname.value = finalNickname;

    const card = convertCardStateToCard(cardContext);
    const newCardId = cardId || String(new Date().getTime());
    appContext?.onCardSubmit(card, newCardId);
  }, [cardContext, cardId, appContext]);

  const cardExpireDate = useMemo(() => {
    if (!cardContext) return;

    return [cardContext.expireDates[0].value, cardContext.expireDates[1].value] as [ExpireMonth, ExpireYear];
  }, [cardContext]);
  const cardNumbers = useMemo(
    () => cardContext?.cardNumbers.map((cardNumberState) => cardNumberState.value),
    [cardContext]
  );

  return (
    <StyledCarNicknameSetterWrapper>
      <StyledNicknameSetterHeaderWrapper>
        <StyledNicknameSetterHeader>카드등록이 완료되었습니다.</StyledNicknameSetterHeader>
      </StyledNicknameSetterHeaderWrapper>

      <Card
        disableNickname
        cardCompany={cardContext?.cardCompany?.value}
        cardExpireDate={cardExpireDate}
        cardNumbers={cardNumbers}
        cardOwnerName={cardContext?.cardOwner?.value}
      />

      <NicknameInput cardNickname={cardContext?.cardNickname} />

      <CardNicknameSubmitButton onSubmit={handleSubmitCard} />
    </StyledCarNicknameSetterWrapper>
  );
}

function getFinalNickname(cardState: CardState) {
  const { cardNickname, cardCompany } = cardState;

  if (!cardNickname || !cardNickname.value) {
    return cardCompany.value?.name;
  }
  return cardNickname.value;
}
