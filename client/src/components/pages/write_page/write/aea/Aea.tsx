import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/aea/Aea.module.css';
import { AeaItem } from '../../../../../modules/changeField/aea/types';
import List from './list/List';
interface AeaProps {
  addAea: () => void;
  aeas: AeaItem[];
  onChangeAeaFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteAeaFields: (index: number) => void;
}
const Aea: React.FC<AeaProps> = ({
  addAea,
  aeas,
  onChangeAeaFields,
  onDeleteAeaFields,
}) => {
  const list = aeas.map((ele, index) => {
    return (
      <List
        key={index}
        aeaTitle={ele.aeaTitle}
        aeaDesc={ele.aeaDesc}
        index={index}
        onChangeAeaFields={onChangeAeaFields}
        onDeleteAeaFields={onDeleteAeaFields}
      />
    );
  });
  return (
    <article className={styles.aea_container}>
      <div className={styles.aea_title}>수상</div>
      <div className={styles.aea_button}>
        <button onClick={addAea}>+ 추가</button>
      </div>
      {list}
    </article>
  );
};

export default Aea;
