import React from 'react';
import styles from '../../../../styles/pages/write_page/preview/Preview.module.css';
import PdfDocument from './PdfDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';

//* ==========================
//* IMPORT_CHILDREN_COMPONENTS
//* ==========================

const Preview: React.FC = () => {
  return (
    <section className={styles.preview_container__div}>
      <div className={styles.preview_block__div}>
        <PdfDocument />
      </div>
      <div>
        <PDFDownloadLink document={<PdfDocument />} fileName="somename.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>
    </section>
  );
};
export default Preview;
