import React, { MouseEvent } from 'react';

import { routes } from '@/router';
import { StyledSubmitButton, StyledSubmitButtonText } from './SubmitButton.styled';

interface SubmitButtonProps {
  onSubmit: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function SubmitButton({ onSubmit }: SubmitButtonProps) {
  return (
    <StyledSubmitButton>
      <StyledSubmitButtonText to={routes.createCardNickname()} onClick={onSubmit}>
        다음
      </StyledSubmitButtonText>
    </StyledSubmitButton>
  );
}
