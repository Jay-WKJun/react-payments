import { styled } from '@/stitches.config';

export const StyledBackground = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(20, 20, 20, 0.8)',

  variants: {
    verticalAlign: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'end' },
    },
  },

  defaultVariants: {
    verticalAlign: 'end',
  },
});
