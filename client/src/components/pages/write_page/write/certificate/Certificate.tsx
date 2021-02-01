import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/education/Education.module.css';
import { CertificateItem } from '../../../../../modules/changeField/certificate/types';
import List from './list/List';

interface EducationProps {
  addCertificate: () => void;
  certificates: CertificateItem[];
  onChangeCertificateFields: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onDeleteCertificateFields: (index: number) => void;
  onToggleCetrificateDropdown: (index: number) => void;
}

const Certificate: React.FC<EducationProps> = ({
  addCertificate,
  certificates,
  onChangeCertificateFields,
  onDeleteCertificateFields,
  onToggleCetrificateDropdown,
}) => {
  const list =
    certificates &&
    certificates.map((ele, index) => {
      return (
        <List
          key={index}
          stateProperty={ele}
          index={index}
          onChangeCertificateFields={onChangeCertificateFields}
          onDeleteCertificateFields={onDeleteCertificateFields}
          onToggleCetrificateDropdown={onToggleCetrificateDropdown}
        />
      );
    });
  return (
    <article className={styles.education_container__article}>
      <div>
        <p className={styles.education_title__p}>자격증</p>
        <p className={styles.education_sub_title__p}>
          보유한 자격증을 기재해주세요 :)
        </p>
      </div>
      <div className={styles.education_list_block__div}>
        <button onClick={addCertificate}>+ 추가</button>
      </div>
      {list}
    </article>
  );
};

export default Certificate;
