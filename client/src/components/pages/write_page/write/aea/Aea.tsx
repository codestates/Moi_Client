import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/aea/Aea.module.css';
import { AeaItem } from '../../../../../modules/changeField/aea/types';
import List from './list/List';
interface AeaProps {
  addAea: () => void;
  aeas: AeaItem[];
  onChangeAeaFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteAeaFields: (index: number) => void;
  onToggleAeaDropdown: (index: number) => void;
}
const Aea: React.FC<AeaProps> = ({
  addAea,
  aeas,
  onChangeAeaFields,
  onDeleteAeaFields,
  onToggleAeaDropdown,
}) => {
  const list = aeas.map((ele, index) => {
    return (
      <List
        key={index}
        stateProperty={ele}
        index={index}
        onChangeAeaFields={onChangeAeaFields}
        onDeleteAeaFields={onDeleteAeaFields}
        onToggleAeaDropdown={onToggleAeaDropdown}
      />
    );
  });

  return (
    <article className={styles.aea_container__article}>
      <div>
        <p className={styles.aea_title__p}>수상 및 기타 활동</p>
        <p className={styles.aea_sub_title__p}>
          수상 이력 및 기타 활동 내역을 기재해주세요 :)
        </p>
      </div>
      <div className={styles.aea_list_block__div}>
        <button onClick={addAea}>+ 추가</button>
      </div>
      {list}
    </article>
  );
};

export default Aea;
