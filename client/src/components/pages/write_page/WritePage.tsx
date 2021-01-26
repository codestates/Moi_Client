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
  };
  onPreviewModal: () => void;
  preview: boolean;
  saveLocal: () => void;
}

const WritePage: React.FC<WritePageProps> = ({
  values,
  onPreviewModal,
  preview,
  saveLocal,
}) => {
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
    <>
      {isPc && (
        <div className={styles.block}>
          <Write onPreviewModal={onPreviewModal} saveLocal={saveLocal} />
          <RightPreviewContainer values={values} />
          {preview && (
            <PreviewContainer values={values} onPreviewModal={onPreviewModal} />
          )}
        </div>
      )}
      {isMobile && (
        <div className={styles.block}>
          <Write onPreviewModal={onPreviewModal} saveLocal={saveLocal} />
        </div>
      )}
    </>
  );
};

export default WritePage;
