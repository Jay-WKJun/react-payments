import { styled } from '@/stitches.config';

export const StyledCardText = styled('span', {
  fontSize: '14px',
  lineHeight: '16px',
  verticalAlign: 'middle',
  fontWeight: '400',
});

export const StyledExpireDateWrapper = styled(StyledCardText, {});

export const StyledExpireDate = styled(StyledCardText, {
  display: 'inline-block',
  width: '1em',
  minWidth: '1em',
});
