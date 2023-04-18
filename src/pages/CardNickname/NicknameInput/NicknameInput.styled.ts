import { styled } from '@/stitches.config';

export const StyledNicknameInput = styled('input', {
  width: '75px',
  marginBottom: '10px',
  textAlign: 'center',
  border: 'none',
  background: 'none',
  outline: 'none',

  margin: '16px 0',
  padding: '4px 0',

  borderBottom: '1px solid #383838',

  variants: {
    error: {
      true: {
        borderBottom: '2px red solid',
      },
    },
  },
});

export const StyledNicknameInputWrapper = styled('div', {
  // @ts-ignore
  flexCenter: 'column',
  width: '100px',
  margin: '16px 0',
});
