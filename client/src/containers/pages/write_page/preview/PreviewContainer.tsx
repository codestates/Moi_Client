import React from 'react';
import styles from '../../../../styles/pages/write_page/preview/Preview.module.css';
import PdfPreview from '../../../../components/pages/write_page/preview/PdfPreview';
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
  const fakeValues = {
    info: {
      username: '김인기',
      avatar: '',
      profile: '그정도 근성이면 합격입니다',
      contact: {
        address: '서울 특별시',
        phone: '010-2768-3037',
        email: 'badsoap141@gmail.com',
        link: {
          facebook: '',
          twitter: '',
          blog: '',
          github: '',
          youtube: '',
          instagram: '',
        },
      },
    },
    skills: [
      { skill: 'java', desc: '못함' },
      { skill: 'react', desc: '개잘함' },
    ],
    workExperience: [
      {
        companyName: '코드 스테이츠',
        start: '2020.01',
        end: '2020.04',
        positionName: '프론트엔드 개발자',
        inOffice: false,
        desc: [{ description: '리액트 개발' }, { description: '리액트 개발' }],
      },
      {
        companyName: '코드 스테이츠',
        start: '2020.01',
        end: '2020.04',
        positionName: '프론트엔드 개발자',
        inOffice: false,
        desc: [{ description: '리액트 개발' }, { description: '리액트 개발' }],
      },
      {
        companyName: '코드 스테이츠',
        start: '2020.01',
        end: '2020.04',
        positionName: '프론트엔드 개발자',
        inOffice: false,
        desc: [{ description: '리액트 개발' }, { description: '리액트 개발' }],
      },
    ],
    educations: [
      {
        eduTitle: '하버드 대학교',
        eduDesc: '목탁 디자인 학과',
        start: '2020.09',
        end: '2020.10',
        dropDownToggle: false,
      },
      {
        eduTitle: '코드 스테이츠 부트캠프',
        eduDesc: '김인기 대가리 존나 쌔게 때리기',
        start: '2020.09',
        end: '2020.10',
        dropDownToggle: false,
      },
    ],
    aeas: [
      {
        aeaTitle: '리액트 스터디',
        aeaDesc: 'tltvkf',
        aeaDate: '2020.09',
        dropDownToggle: false,
      },
    ],
  };
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
