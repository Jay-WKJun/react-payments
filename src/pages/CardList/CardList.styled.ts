import { styled } from '@/stitches.config';

export const StyledCardListContainer = styled('div', {
  maxHeight: '700px',
  app: '',
  // @ts-ignore
  boxSizing: 'border-box',
  overflowY: 'auto',
});

export const StyledCardListWrapper = styled('div', {
  // @ts-ignore
  flexCenter: 'column',
});

export const StyledDeleteButton = styled('div', {
  position: 'absolute',
  color: 'Black',
  right: '10px',
  top: '10px',
});
