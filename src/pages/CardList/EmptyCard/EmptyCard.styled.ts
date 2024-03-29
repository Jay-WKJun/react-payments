import { styled } from '@/stitches.config';
import { Link } from '@/components';

export const StyledEmptyCardWrapper = styled(Link, {
  // @ts-ignore
  flexCenter: '',
  buttonInit: '',

  margin: '10px 0',
  backgroundColor: 'transparent',
});

export const StyledEmptyCard = styled('div', {
  // @ts-ignore
  flexCenter: 'column',

  width: '208px',
  height: '130px',
  fontSize: '30px',
  color: '#575757',
  background: '#e5e5e5',
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  userSelect: 'none',
});
