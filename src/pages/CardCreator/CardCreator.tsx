import React, { MouseEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Card, ThemeSetter } from '@/components';
import { useCardContextApis, useCardContext } from '@/contexts/CardContext';
import { useCardStatesValidator } from '@/hooks';
import { routes } from '@/router';
import { CardCompany } from '@/types';

import { useCardCompanySelectModal, useAutoCompanyChecker } from './hooks';
import {
  CardNumbersInputList,
  ExpireDatesInputList,
  CardOwnerInput,
  SecurityCodeInput,
  PasswordsInputList,
} from './InputComponents';
import { SubmitButton } from './SubmitButton';
import { StyledErrorMessage, cardCreatorContainerStyle } from './CardCreator.styled';

export function CardCreator() {
  const cardContext = useCardContext();
  const cardContextApis = useCardContextApis();

  useAutoCompanyChecker(cardContext?.cardNumbers[0].value, cardContext?.cardNumbers[1].value);

  const { CardCompanySelectModal, showModal, hideModal } = useCardCompanySelectModal();

  const handleCardClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      showModal();
    },
    [showModal]
  );

  const handleCardCompanySelectModalClick = useCallback(
    (cardCompany: CardCompany) => {
      cardContextApis?.setOneCardState({ type: 'cardCompany', newState: { value: cardCompany } });
      hideModal();
    },
    [hideModal, cardContextApis]
  );

  const validateCardStates = useCardStatesValidator();

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (!cardContext) return;

      const { cardCompany, cardNumbers, expireDates, cardOwner, passwords, securityCode } = cardContext;
      const isValidate = validateCardStates([
        ['cardNumbers', cardNumbers],
        ['expireDates', expireDates],
        ['cardOwner', cardOwner],
        ['securityCode', securityCode],
        ['passwords', passwords],
        ['cardCompany', cardCompany],
      ]);

      if (!isValidate) e.preventDefault();
    },
    [cardContext, validateCardStates]
  );

  if (!cardContext) return null;

  const { cardCompany, cardNumbers, cardOwner, expireDates, passwords, securityCode } = cardContext;

  return (
    <ThemeSetter className={cardCreatorContainerStyle()} theme={cardCompany.value?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card
        cardCompany={cardCompany.value}
        cardExpireDate={[expireDates[0].value, expireDates[1].value]}
        cardNumbers={cardNumbers.map((cardNumberState) => cardNumberState.value)}
        cardOwnerName={cardOwner?.value}
        additionalBottomElement={
          !cardCompany.errorMessage ? <StyledErrorMessage>{cardCompany.errorMessage}</StyledErrorMessage> : undefined
        }
        onCardClick={handleCardClick}
      />

      <CardNumbersInputList cardNumbers={cardNumbers} />
      <ExpireDatesInputList expireDates={expireDates} />
      <CardOwnerInput cardOwner={cardOwner} />
      <SecurityCodeInput securityCode={securityCode} />
      <PasswordsInputList passwords={passwords} />

      <SubmitButton onSubmit={handleSubmit} />

      <CardCompanySelectModal onCardCompanyClick={handleCardCompanySelectModalClick} />
    </ThemeSetter>
  );
}
