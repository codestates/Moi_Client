import React from 'react';
import styles from '../../../../../styles/pages/landing_page/Intro/Intro.module.css';
import previewGif from '../../../../../public/previewGif.gif';

const RightPreview: React.FC = () => {
  return (
    <div className={styles.right__menu}>
      <article className={styles.right__gif}>
        <img className={styles.img} src={previewGif} alt="gif" />
      </article>
    </div>
  );
};

export default RightPreview;
