import React, { MouseEvent, useEffect } from 'react';

import { Card } from '@/components';
import { Card as CardModel, useApplicationContext } from '@/contexts/ApplicationContext';
import { useModal } from '@/hooks';
import { routes } from '@/router';
import type { CardCompany } from '@/types';

import {
  StyledCardModalWrapper,
  StyledControllersContainer,
  StyledConfirmButton,
  StyledCardModalButton,
} from './CardModal.styled';
import { useRouterContextApi } from '@/contexts';

export type TCardModalDTO = { id: string; card: CardModel };

interface CardModalProps {
  cardInfo?: TCardModalDTO | null;
  onModalHide?: () => void;
}

export function CardModal({ cardInfo, onModalHide }: CardModalProps) {
  const routerContextApi = useRouterContextApi();
  const appContext = useApplicationContext();

  const { Modal, showModal } = useModal();

  useEffect(() => {
    if (cardInfo) {
      showModal();
    }
  }, [showModal, cardInfo]);

  const handleConfirmButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!cardInfo) return;

    const { card, id } = cardInfo;
    appContext?.onCardConfirm(card, id);
  };

  const handleNicknameChangeButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!cardInfo) return;

    e.stopPropagation();

    routerContextApi?.navigate(routes.nicknameUpdate, { cardId: cardInfo?.id });
  };

  if (!cardInfo) return null;

  const { card } = cardInfo;

  return (
    <Modal onBackgroundClick={onModalHide}>
      <StyledCardModalWrapper>
        <Card
          cardCompany={card?.cardCompany as CardCompany}
          cardExpireDate={card?.expireDates}
          cardNumbers={card?.cardNumbers}
          cardOwnerName={card?.cardOwner}
          cardNickname={card?.cardNickname}
        />
        <StyledControllersContainer>
          <StyledConfirmButton onClick={handleConfirmButtonClick}>선택</StyledConfirmButton>
          <StyledCardModalButton onClick={handleNicknameChangeButtonClick}>닉네임 변경</StyledCardModalButton>
        </StyledControllersContainer>
      </StyledCardModalWrapper>
    </Modal>
  );
}
