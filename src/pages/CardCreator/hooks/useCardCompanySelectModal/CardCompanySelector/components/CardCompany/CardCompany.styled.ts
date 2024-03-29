import { styled } from '@/stitches.config';

export const StyledCardCompany = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  marginLeft: '10px',
  marginRight: '10px',
  height: '80px',
  cursor: 'pointer',
});

export const StyledCardCompanyColor = styled('div', {
  width: '40px',
  height: '40px',
  borderRadius: '100%',
  content: 'none',
  backgroundColor: '$cardBackground',
});

export const StyledCardCompanyName = styled('div', {});
