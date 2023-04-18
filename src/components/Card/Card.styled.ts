import { styled, css } from '@/stitches.config';

export const cardThemeWrapperStyle = css({
  // @ts-ignore
  flexCenter: 'column',
  margin: '10px 0',
});

export const StyledCard = styled('div', {
  position: 'relative',
  // @ts-ignore
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

export const StyledCardTop = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  paddingLeft: '16px',
  paddingRight: '16px',
  boxSizing: 'border-box',
  color: 'black',
});

export const StyledCardMiddle = styled('div', {
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '100%',
  paddingLeft: '16px',
  paddingRight: '16px',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export const StyledCardBottom = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const StyledCardBottomInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  paddingLeft: '16px',
  paddingRight: '16px',
  boxSizing: 'border-box',
});

export const StyledCardChip = styled('div', {
  width: '40px',
  height: '26px',
  left: '95px',
  top: '122px',
  background: '#cbba64',
  borderRadius: '4px',
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
