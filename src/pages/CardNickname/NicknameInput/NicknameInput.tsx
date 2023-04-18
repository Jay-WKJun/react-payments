import React, { ChangeEvent, useCallback } from 'react';

import { CardNicknameState, useCardContextApis } from '@/contexts/CardContext';

import { StyledNicknameInput, StyledNicknameInputWrapper } from './NicknameInput.styled';

interface NicknameInputProps {
  cardNickname?: CardNicknameState;
}

export function NicknameInput({ cardNickname }: NicknameInputProps) {
  const cardContextApis = useCardContextApis();

  const handleCardNicknameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      cardContextApis?.setOneCardState({ type: 'cardNickname', newState: { value: e.currentTarget.value } });
    },
    [cardContextApis]
  );

  return (
    <StyledNicknameInputWrapper>
      <StyledNicknameInput
        autoFocus
        type="text"
        maxLength={10}
        value={cardNickname?.value || ''}
        placeholder="카드 별칭 (선택)"
        onChange={handleCardNicknameChange}
      />
    </StyledNicknameInputWrapper>
  );
}
