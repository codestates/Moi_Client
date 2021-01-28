import React from 'react';
import styles from '../../../../../styles/pages/landing_page/intro/Intro.module.css';
import previewGif from '../../../../../public/previewGif.gif';

const RightPreview: React.FC = () => {
  return <img className={styles.img} src={previewGif} alt="gif" />;
};

export default RightPreview;
