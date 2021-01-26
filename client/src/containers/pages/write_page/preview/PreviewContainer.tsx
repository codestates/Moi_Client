import React from 'react';
import styles from '../../../../styles/pages/write_page/preview/Preview.module.css';
import PdfDocument from '../../../../components/pages/write_page/preview/PdfDocument';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import { ExperienceItem } from '../../../../modules/changeField/workExperience/types';
import { SkillItem } from '../../../../modules/changeField/skills/types';
import { AeaItem } from '../../../../modules/changeField/aea/types';
import { EducationItem } from '../../../../modules/changeField/education/types';

//* ==========================
//* IMPORT_CHILDREN_COMPONENTS
//* ==========================

interface PreviewProps {
  values: {
    info: {
      username: string;
      avatar: string;
      profile: string;
      contact: {
        address: string;
        phone: string;
        email: string;
        link: {
          facebook: string;
          twitter: string;
          blog: string;
          github: string;
          youtube: string;
          instagram: string;
        };
      };
    };
    skills: SkillItem[];
    workExperience: ExperienceItem[];
    educations: EducationItem[];
    aeas: AeaItem[];
  };
  onPreviewModal: () => void;
}

const Preview: React.FC<PreviewProps> = ({ values, onPreviewModal }) => {
  return (
    <section className={styles.preview_container__div}>
      <div className={styles.preview_block__div}>
        <PDFViewer width="100%" height="100%">
          <PdfDocument values={values} />
        </PDFViewer>
        <button onClick={onPreviewModal}>x</button>
      </div>
      {/* <div>
        <button className={styles.preview_download__button}>
          <PDFDownloadLink
            document={<PdfDocument values={values} />}
            fileName="moi_basic_resume.pdf"
            style={{
              padding: '12px 8px',
              textDecoration: 'none',
              color: 'white',
              fontWeight: 800,
            }}
          >
            {({ loading }) => (loading ? 'PDF 변환중...' : 'PDF로 다운로드')}
          </PDFDownloadLink>
        </button>
      </div> */}
    </section>
  );
};
export default Preview;
