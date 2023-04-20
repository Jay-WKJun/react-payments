import React, { HtmlHTMLAttributes, MouseEvent, PropsWithChildren, useCallback } from 'react';

import { useRouterContextApi } from '@/contexts';

interface LinkProps extends HtmlHTMLAttributes<HTMLButtonElement>{
  to: string;
}

export function Link({
  to,
  onClick,
  children,
  ...restProps
}: PropsWithChildren<LinkProps>) {
  const routerContextApi = useRouterContextApi();

  const onLinkClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);

    if (e.isDefaultPrevented()) return;

    routerContextApi?.navigate(to);
  }, [to, onClick]);

  return <button type="button" {...restProps} onClick={onLinkClick} >{children}</button>;
}

