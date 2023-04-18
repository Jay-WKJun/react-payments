import { styled } from '@/stitches.config';

export const StyledCardInputWrapper = styled('div', {
  margin: '16px 0',
});

export const StyledHeaderWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledHeader = styled('span', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4px',
  fontSize: '12px',
  lineHeight: '14px',
  color: '#525252',
});

export const StyledErrorMessage = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: 'red',
  fontSize: '12px',
  fontWeight: 'bold',
});
