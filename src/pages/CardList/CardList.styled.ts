import { styled } from '@/stitches.config';

export const StyledCardListContainer = styled('div', {
  minWidth: '280px',
  height: '100%',
  padding: '20px',
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
