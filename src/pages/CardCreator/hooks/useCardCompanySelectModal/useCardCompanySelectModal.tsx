import React, { useCallback } from 'react';

import { css } from '@/stitches.config';
import { useModal } from '@/hooks';

import { CardCompanySelector, CardCompanySelectorProps } from './CardCompanySelector';

const modalBackgroundStyle = css({
  overflow: 'hidden',
});

export function useCardCompanySelectModal() {
  const { Modal, showModal, hideModal } = useModal();

  const CardCompanySelectModal = useCallback(
    (props: CardCompanySelectorProps) => (
      <Modal className={modalBackgroundStyle()}>
        <CardCompanySelector {...props} />
      </Modal>
    ),
    [Modal]
  );

  return {
    CardCompanySelectModal,
    showModal,
    hideModal,
  };
}
