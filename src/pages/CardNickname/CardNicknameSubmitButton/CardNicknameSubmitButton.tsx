import React, { MouseEvent } from 'react';

import { routes } from '@/router';

import { StyledNicknameSubmitButton, StyledNicknameSubmitButtonText } from './CardNicknameSubmitButton.styled';

interface CardNicknameSubmitButtonProps {
  onSubmit: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function CardNicknameSubmitButton({ onSubmit }: CardNicknameSubmitButtonProps) {
  return (
    <StyledNicknameSubmitButton>
      <StyledNicknameSubmitButtonText to={routes.home} onClick={onSubmit}>
        다음
      </StyledNicknameSubmitButtonText>
    </StyledNicknameSubmitButton>
  );
}
