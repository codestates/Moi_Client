import React from 'react';
import styles from '../../../../styles/pages/write_page/preview/Preview.module.css';
import PdfDocument from '../../../../components/pages/write_page/preview/PdfDocument';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

//* import responsive module
import { useMediaQuery } from 'react-responsive';

//* import redux state types
import { ExperienceItem } from '../../../../modules/changeField/workExperience/types';
import { SkillItem } from '../../../../modules/changeField/skills/types';
import { AeaItem } from '../../../../modules/changeField/aea/types';
import { EducationItem } from '../../../../modules/changeField/education/types';
import OutsideClickHandler from 'react-outside-click-handler';

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
  // * ====================
  // *  RESPONSIVE
  // * ====================
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  });

  return (
    <section className={styles.preview_container__div}>
      {isPc && (
        <OutsideClickHandler onOutsideClick={onPreviewModal}>
          <div className={styles.preview_block__div}>
            <PDFViewer width="100%" height="100%">
              <PdfDocument values={values} />
            </PDFViewer>
          </div>
        </OutsideClickHandler>
      )}
      {isMobile && (
        <OutsideClickHandler onOutsideClick={onPreviewModal}>
          <PDFDownloadLink
            document={<PdfDocument values={values} />}
            fileName="somename.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button className={styles.preview_pdf_download__button}>
                  렌더링중
                </button>
              ) : (
                <div className={styles.white__box}>
                  <button className={styles.preview_pdf_download__button}>
                    다운로드
                  </button>
                </div>
              )
            }
          </PDFDownloadLink>
        </OutsideClickHandler>
      )}
    </section>
  );
};
export default Preview;
