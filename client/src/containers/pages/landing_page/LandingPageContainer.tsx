import React, { useState, useEffect } from 'react';
import LandingPage from '../../../components/pages/landing_page/LandingPage';
// * ====================
// *   IMPORT_CUSTOM_HOOKS
// * ====================
import useAuthCheckModal from '../../../hooks/systems/modal/useAuthCheckModal';

const LandingPageContainer: React.FC = () => {
  const { checkModal, onAuthCheckModal, onCloseModal } = useAuthCheckModal();

  useEffect(() => {
    if (checkModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [checkModal]);
  return (
    <>
      <LandingPage
        checkModal={checkModal}
        onAuthCheckModal={onAuthCheckModal}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default LandingPageContainer;
