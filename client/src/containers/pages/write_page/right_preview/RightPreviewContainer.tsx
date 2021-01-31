import React from 'react';

//* import child components
import RightPreview from '../../../../components/pages/write_page/right_preview/RightPreview';

//* import redux state types
import { ExperienceItem } from '../../../../modules/changeField/workExperience/types';
import { SkillItem } from '../../../../modules/changeField/skills/types';
import { AeaItem } from '../../../../modules/changeField/aea/types';
import { EducationItem } from '../../../../modules/changeField/education/types';

interface RightPreviewContainerProps {
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
const RightPreviewContainer: React.FC<RightPreviewContainerProps> = ({
  values,
}) => {
  return (
    <>
      <RightPreview values={values} />
    </>
  );
};

export default RightPreviewContainer;
