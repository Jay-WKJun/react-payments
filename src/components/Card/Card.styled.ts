import { styled, css } from '@/stitches.config';

export const cardThemeWrapperStyle = css({
  flexCenter: 'column',
  margin: '10px 0',
});

export const StyledCard = styled('div', {
  position: 'relative',
  flexCenter: 'column',
  width: '208px',
  height: '130px',
  fontSize: '30px',
  color: '$cardNumber',
  background: '$cardBackground',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',

  variants: {
    pointCursor: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});

export const StyledEmptyCardCompany = styled('span', {
  position: 'absolute',
  right: '10px',
  fontSize: '15px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginLeft: '20px',
  whiteSpace: 'pre-wrap',
});