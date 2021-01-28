import React from 'react';
import styles from '../../../../styles/pages/landing_page/intro/Intro.module.css';
import LeftTitle from './left_title/LeftTitle';
import RightPreview from './right_preview/RightPreview';
import AuthCheckModal from '../../../systems/modal/AuthCheckModal';

interface IntroProps {
  checkModal: boolean;
  onAuthCheckModal: (state: boolean) => void;
  onCloseModal: () => void;
}

const Intro: React.FC<IntroProps> = ({
  checkModal,
  onAuthCheckModal,
  onCloseModal,
}) => {
  return (
    <>
      <section className={styles.block}>
        <div className={styles.container}>
          <LeftTitle
            checkModal={checkModal}
            onAuthCheckModal={onAuthCheckModal}
          />
          <RightPreview />
          {checkModal && <AuthCheckModal onCloseModal={onCloseModal} />}
        </div>
      </section>
    </>
  );
};

export default Intro;
