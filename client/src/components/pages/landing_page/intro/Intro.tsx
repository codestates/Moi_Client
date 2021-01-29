import React from 'react';
import styles from '../../../../styles/pages/landing_page/intro/Intro.module.css';
import LeftTitle from './left_title/LeftTitle';
import RightPreview from './right_preview/RightPreview';
import AuthCheckModal from '../../../systems/modal/AuthCheckModal';

interface IntroProps {
  checkModal: boolean;
  type: string;
  onAuthCheckModal: (state: boolean, type: string) => void;
  onCloseModal: () => void;
}

const Intro: React.FC<IntroProps> = ({
  checkModal,
  type,
  onAuthCheckModal,
  onCloseModal,
}) => {
  return (
    <>
      <section className={styles.block}>
        <div className={styles.container}>
          <LeftTitle onAuthCheckModal={onAuthCheckModal} />
          <RightPreview />
          {checkModal && (
            <AuthCheckModal type={type} onCloseModal={onCloseModal} />
          )}
        </div>
      </section>
    </>
  );
};

export default Intro;
