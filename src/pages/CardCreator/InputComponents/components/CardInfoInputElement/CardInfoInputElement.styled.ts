import { styled } from '@/stitches.config';

export const StyledCardInfoInputElement = styled('div', {
  position: 'relative',
});

export const StyledInput = styled('input', {
  inputBasic: '',
  color: '$inputColor',
  boxSizing: 'border-box',

  variants: {
    error: {
      true: {
        border: '2px solid red',
      },
    },
  },
});

export const StyledErrorMessage = styled('span', {
  position: 'absolute',
  top: '100%',
  left: '0',
  color: 'red',
  fontSize: '10px',
  width: 'max-content',
});
