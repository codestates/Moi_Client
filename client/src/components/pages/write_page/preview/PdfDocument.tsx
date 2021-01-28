import React from 'react';
import Header from './header/Header';

//* Import child components
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Edu from './education/Edu';
import Aea from './aea/Aea';

//* Import types
import { ExperienceItem } from '../../../../modules/changeField/workExperience/types';
import { SkillItem } from '../../../../modules/changeField/skills/types';
import { AeaItem } from '../../../../modules/changeField/aea/types';
import { EducationItem } from '../../../../modules/changeField/education/types';

//* Import fonts
import NanumGothicNomal from './font/NanumGothic.ttf';
import NanumGothicBold from './font/NanumGothicBold.ttf';

import { Page, Font, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 60,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

Font.register({
  family: 'Nanum Gothic',
  fonts: [
    {
      src: NanumGothicNomal,
    },
    {
      src: NanumGothicBold,
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src:
        'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src:
        'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
});

interface PdfDocumentProps {
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
}

//?  Create Document Component
const PdfDocument: React.FC<PdfDocumentProps> = ({ values }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header values={values} />
        <Profile values={values} />
        {values.skills.length >= 1 && <Skills values={values} />}
        {values.workExperience.length >= 1 && <Experience values={values} />}
        {values.educations.length >= 1 && <Edu values={values} />}
        {values.aeas.length >= 1 && <Aea values={values} />}
      </Page>
    </Document>
  );
};
export default PdfDocument;
