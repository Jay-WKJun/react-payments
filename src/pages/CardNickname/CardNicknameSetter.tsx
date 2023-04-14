import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from '@/components';
import { useFetchCardList } from '@/hooks';
import { useCardContext } from '@/contexts/CardContext';

import { useNicknameValidator, useValidateCreatePage, useValidateUpdatePage } from './hooks';
import { NicknameInput } from './NicknameInput';
import { CardNicknameSubmitButton } from './CardNicknameSubmitButton';
import { StyledCarNicknameSetterWrapper } from './CardNicknameSetter.styled';

export function CardNicknameSetter() {
  useValidateCreatePage();
  useValidateUpdatePage();

  const cardContext = useCardContext();
  const { cardId } = useParams();
  const { postCard } = useFetchCardList();
  const validateNickname = useNicknameValidator();

  const cardExpireDate = useMemo(() => cardContext?.expireDates?.map((expireDate) => expireDate.value), [cardContext]);

  const handleSubmitCard = useCallback(() => {
    if (!cardContext) return;

    validateNickname();

    // @ts-ignore
    postCard(cardContext, cardId);
  }, [cardContext, validateNickname, postCard, cardId]);

  return (
    <StyledCarNicknameSetterWrapper>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>

      <Card
        disableNickname
        cardCompany={cardContext?.cardCompanies[0]?.value}
        cardExpireDate={cardExpireDate}
        cardNumbers={cardContext?.cardNumbers}
        cardOwnerName={cardContext?.cardOwners?.[0]?.value}
      />

      <NicknameInput cardNickname={cardContext?.cardNicknames[0]} />

      <CardNicknameSubmitButton onSubmit={handleSubmitCard} />
    </StyledCarNicknameSetterWrapper>
  );
}
