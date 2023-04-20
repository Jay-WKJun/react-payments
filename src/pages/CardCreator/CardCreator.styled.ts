import { styled, css } from '@/stitches.config';

import { Link } from '@/components';

export const cardCreatorContainerStyle = css({
  app: '',
});

export const StyledCardCreatorTitle = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '22px',
  color: '#383838',
});

export const StyledBackButton = styled(Link, {
  marginRight: '10px',
});

export const StyledErrorMessage = styled('span', {
  color: 'red',
  fontWeight: 'bold',
  marginTop: '5px',
});
