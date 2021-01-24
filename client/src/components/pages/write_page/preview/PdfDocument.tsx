import React from 'react';
import Header from './header/Header';

import Profile from './profile/Profile';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Edu from './education/Edu';
import Aea from './aea/Aea';

import NanumGothicNomal from './font/NanumGothic.ttf';
// import NanumGothicBold from './font/NanumGothicBold.ttf';

import { Page, Font, Document, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'Nanum Gothic',
  src: NanumGothicNomal,
});

const styles = StyleSheet.create({
  page: {
    padding: 60,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

// Create Document Component
const PdfDocument: React.FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <Profile />
      <Skills />
      <Experience />
      <Edu />
      <Aea />
    </Page>
  </Document>
);
export default PdfDocument;
