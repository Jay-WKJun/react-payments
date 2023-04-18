import React, { memo } from 'react';

import type { CardState } from '@/contexts/CardContext';

import { CardInputWrapperPure } from '../components';
import { PasswordInput } from './PasswordInput';
import { StyledPasswordsContainer, StyledHiddenPassword } from './PasswordsInputList.styled';

interface PasswordsInputListProps {
  passwords: CardState['passwords'];
}

export const PasswordsInputList = memo(function PasswordsInputList({ passwords }: PasswordsInputListProps) {
  const errorMessage = passwords?.find((password) => !!password.errorMessage)?.errorMessage;

  return (
    <CardInputWrapperPure header="카드 비밀번호" errorMessage={errorMessage}>
      <StyledPasswordsContainer>
        {passwords.map((password, i) => {
          return <PasswordInput key={`password-input-${i}`} password={password} index={i} />;
        })}
        <StyledHiddenPassword>•</StyledHiddenPassword>
        <StyledHiddenPassword>•</StyledHiddenPassword>
      </StyledPasswordsContainer>
    </CardInputWrapperPure>
  );
});
