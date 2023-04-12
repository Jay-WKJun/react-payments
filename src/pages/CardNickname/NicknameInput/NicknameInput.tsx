import React, { ChangeEvent, useCallback } from 'react';

import { CardNicknameState, useCardContextApis } from '@/contexts/CardContext';

import { StyledNicknameInput } from './NicknameInput.styled';

interface NicknameInputProps {
  cardNickname?: CardNicknameState;
}

export function NicknameInput({ cardNickname }: NicknameInputProps) {
  const cardContextApis = useCardContextApis();

  const handleCardNicknameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      cardContextApis?.setOneCardState({ type: 'cardNicknames', index: 0, newState: { value: e.currentTarget.value } });
    },
    [cardContextApis]
  );

  return (
    <div className="input-container flex-column-center w-100">
      <StyledNicknameInput
        autoFocus
        className="input-underline w-75"
        type="text"
        maxLength={10}
        value={cardNickname?.value || ''}
        placeholder="카드 별칭 (선택)"
        onChange={handleCardNicknameChange}
      />
    </div>
  );
}
