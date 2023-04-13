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
  SecurityCodesInputList,
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
      cardContextApis?.setOneCardState({ type: 'cardCompanies', index: 0, newState: { value: cardCompany } });
      hideModal();
    },
    [hideModal, cardContextApis]
  );

  const validateCardStates = useCardStatesValidator();

  const handleSubmit = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (!cardContext) return;

      const { cardCompanies, cardNumbers, expireDates, cardOwners, passwords, securityCodes } = cardContext;
      const isValidate = validateCardStates([
        ['cardCompanies', cardCompanies],
        ['cardNumbers', cardNumbers],
        ['expireDates', expireDates],
        ['cardOwners', cardOwners],
        ['securityCodes', securityCodes],
        ['passwords', passwords],
      ]);

      if (!isValidate) e.preventDefault();
    },
    [cardContext, validateCardStates]
  );

  if (!cardContext) return null;

  const { cardCompanies, cardNumbers, cardOwners, expireDates, passwords, securityCodes } = cardContext;

  return (
    <ThemeSetter className={cardCreatorContainerStyle()} theme={cardCompanies[0].value?.theme}>
      <h2 className="page-title">
        <Link to={routes.home} className="mr-10">{`<`}</Link> 카드 추가
      </h2>

      <Card
        cardCompany={cardCompanies[0].value}
        cardExpireDate={expireDates?.map((expireDate) => expireDate.value)}
        cardNumbers={cardNumbers}
        cardOwnerName={cardOwners?.[0]?.value}
        additionalBottomElement={
          !cardCompanies[0].errorMessage ? (
            <StyledErrorMessage>{cardCompanies[0].errorMessage}</StyledErrorMessage>
          ) : undefined
        }
        onCardClick={handleCardClick}
      />

      <CardNumbersInputList cardNumbers={cardNumbers} />
      <ExpireDatesInputList expireDates={expireDates} />
      <CardOwnerInput cardOwners={cardOwners} />
      <SecurityCodesInputList securityCodes={securityCodes} />
      <PasswordsInputList passwords={passwords} />

      <SubmitButton onSubmit={handleSubmit} />

      <CardCompanySelectModal onCardCompanyClick={handleCardCompanySelectModalClick} />
    </ThemeSetter>
  );
}
