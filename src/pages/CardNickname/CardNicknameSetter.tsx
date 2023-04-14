import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from '@/components';
import { useCardContext, useApplicationContext, convertCardStateToCard } from '@/contexts';

import { useNicknameValidator, useValidateCreatePage, useValidateUpdatePage } from './hooks';
import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';
import { StyledCarNicknameSetterWrapper } from './CardNicknameSetter.styled';

export function CardNicknameSetter() {
  useValidateCreatePage();
  useValidateUpdatePage();

  const cardContext = useCardContext();
  const appContext = useApplicationContext();
  const { cardId } = useParams();
  const validateNickname = useNicknameValidator();

  const handleSubmitCard = useCallback(() => {
    if (!cardContext) return;

    validateNickname();

    const card = convertCardStateToCard(cardContext);
    const newCardId = cardId || String(new Date().getTime());
    appContext?.onCardSubmit(card, newCardId);
  }, [cardContext, validateNickname, cardId, appContext]);

  const cardExpireDate = useMemo(() => cardContext?.expireDates?.map((expireDate) => expireDate.value), [cardContext]);
  const cardNumbers = useMemo(
    () => cardContext?.cardNumbers.map((cardNumberState) => cardNumberState.value),
    [cardContext]
  );

  return (
    <StyledCarNicknameSetterWrapper>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>

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
