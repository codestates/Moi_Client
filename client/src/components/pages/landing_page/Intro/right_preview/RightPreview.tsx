import React from 'react';
import styles from '../../../../../styles/pages/landing_page/intro/Intro.module.css';

const RightPreview: React.FC = () => {
  return (
    <div className={styles.right__menu}>
      <article className={styles.right__gif}>
        <img
          className={styles.img}
          src="https://media.giphy.com/media/l4pT7j0OAUCvtWXXG/source.gif"
          alt="gif"
        />
      </article>
    </div>
  );
};

export default RightPreview;
