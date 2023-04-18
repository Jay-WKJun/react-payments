import { styled } from '@/stitches.config';

import { StyledCardBottomInfo } from './Card.styled';

export const StyledCardNumbersContainer = styled(StyledCardBottomInfo, {});

export const StyledCardNumberWrapper = styled('div', {
  // @ts-ignore
  flexCenter: '',
  minWidth: '1em',
  flex: 1,
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '16px',
  verticalAlign: 'middle',
  letterSpacing: '2px',
});
