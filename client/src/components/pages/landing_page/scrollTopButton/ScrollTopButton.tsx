import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styles from '../../../../styles/pages/landing_page/scrollTopButtom/Button.module.css';

const ScrollTopButton: React.FC = () => {
  return <FaArrowCircleUp className={styles.icon} />;
};

export default ScrollTopButton;
