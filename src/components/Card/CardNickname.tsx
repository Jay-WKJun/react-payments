import React from 'react';
import { styled } from '@/stitches.config';

import { CardNicknameProp } from './types';

const StyledCardNickname = styled('span', {
  fontWeight: 'bold',
  marginTop: '5px',
});

interface CardNicknameProps {
  nickname?: CardNicknameProp;
}

export function CardNickname({ nickname }: CardNicknameProps) {
  return <StyledCardNickname>{nickname}</StyledCardNickname>;
}
