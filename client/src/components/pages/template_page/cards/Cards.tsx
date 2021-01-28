import React from 'react';
import styles from '../../../../styles/pages/template_page/cards/Cards.module.css';
import { Link } from 'react-router-dom';
import { templates } from '../../../../data/templates/data';

//* Import react-icons
import { BsPencilSquare } from 'react-icons/bs';

interface CardsProps {
  selectTemplate: (templateCode: number) => void;
}

const Cards: React.FC<CardsProps> = ({ selectTemplate }) => {
  const printCards = templates.map((ele) => {
    return (
      <li key={ele.templateCode}>
        <div className={styles.template__cards__list__nameTag}>
          <strong>{ele.name}</strong>
        </div>
        <div className={styles.template__cards__list__preview__block}>
          <Link to="/write" onClick={() => selectTemplate(ele.templateCode)}>
            <img src={ele.templateImg} alt="template_Preview" />
            <div className={styles.template__cards__list__button__block}>
              <BsPencilSquare />
            </div>
          </Link>
        </div>
      </li>
    );
  });
  return <ul className={styles.template__cards__list}>{printCards}</ul>;
};

export default Cards;
