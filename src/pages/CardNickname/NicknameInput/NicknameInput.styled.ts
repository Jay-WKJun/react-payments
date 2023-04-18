import { styled } from '@/stitches.config';

export const StyledNicknameInputWrapper = styled('div', {
  // @ts-ignore
  flexCenter: 'column',
  width: '100%',
  margin: '16px 0',
});

export const StyledNicknameInput = styled('input', {
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
