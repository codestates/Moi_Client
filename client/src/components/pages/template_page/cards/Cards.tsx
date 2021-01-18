import React from 'react';
import styles from '../../../../styles/pages/template_page/cards/Cards.module.css';

//* Import template card preview image
import moi_basic from '../../../../public/moi_basic.png';

//* Import react-icons
import { BsPencilSquare } from 'react-icons/bs';

const Cards: React.FC = () => {
  return (
    <ul className={styles.template__cards__list}>
      <li onClick={() => console.log('template 1')}>
        <div className={styles.template__cards__list__nameTag}>
          <strong>Moi Basic</strong>
        </div>
        <div className={styles.template__cards__list__preview__block}>
          <a href="#">
            <img src={moi_basic} alt="template_Preview" />
            <div className={styles.template__cards__list__button__block}>
              <BsPencilSquare />
            </div>
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Cards;
