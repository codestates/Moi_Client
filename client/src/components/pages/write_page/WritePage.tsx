import React from 'react';
import Write from './write/Write';
import styles from '../../../styles/pages/write_page/Index.module.css';

//* import child components
import RightPreviewContainer from '../../../containers/pages/write_page/right_preview/RightPreviewContainer';
import PreviewContainer from '../../../containers/pages/write_page/preview/PreviewContainer';

//* import responsive module
import { useMediaQuery } from 'react-responsive';

//* import redux state types
import { ExperienceItem } from '../../../modules/changeField/workExperience/types';
import { SkillItem } from '../../../modules/changeField/skills/types';
import { AeaItem } from '../../../modules/changeField/aea/types';
import { EducationItem } from '../../../modules/changeField/education/types';
import { CertificateItem } from '../../../modules/changeField/certificate/types';

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================
interface WritePageProps {
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
    certificates: CertificateItem[];
  };
  onPreviewModal: () => void;
  preview: boolean;
  saveLocal: () => void;
  saveDoneModal: boolean;
  onSaveModal: () => void;
}

const WritePage: React.FC<WritePageProps> = ({
  values,
  onPreviewModal,
  preview,
  saveLocal,
  saveDoneModal,
  onSaveModal,
}) => {
  // * ====================
  // *  RESPONSIVE
  // * ====================
  const isPc = useMediaQuery({
    query: '(min-width:1025px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1024px)',
  });

  return (
    <>
      {isPc && (
        <div className={styles.block}>
          <Write
            onPreviewModal={onPreviewModal}
            saveLocal={saveLocal}
            saveDoneModal={saveDoneModal}
            onSaveModal={onSaveModal}
          />
          <RightPreviewContainer values={values} />
          {preview && (
            <PreviewContainer values={values} onPreviewModal={onPreviewModal} />
          )}
        </div>
      )}
      {isMobile && (
        <div className={styles.block}>
          <Write
            onPreviewModal={onPreviewModal}
            saveLocal={saveLocal}
            saveDoneModal={saveDoneModal}
            onSaveModal={onSaveModal}
          />
          {preview && (
            <PreviewContainer values={values} onPreviewModal={onPreviewModal} />
          )}
        </div>
      )}
    </>
  );
};

export default WritePage;
