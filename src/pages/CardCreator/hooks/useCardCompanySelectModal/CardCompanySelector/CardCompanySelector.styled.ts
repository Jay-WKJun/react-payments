import { styled, keyframes } from '@/stitches.config';

const slideUp = keyframes({
  '0%': {
    transform: 'translateY(70%)',
  },
  '100%': {
    transform: 'translateY(0%)',
  },
});

export const StyledCardCompanySelector = styled('div', {
  width: '100%',
  height: '30%',
  maxHeight: '30%',
  backgroundColor: 'White',
  animation: `${slideUp} 0.5s`,
});

export const StyledCompaniesFlexBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  rowGap: '15px',
  flexWrap: 'wrap',
  padding: '30px',
});
