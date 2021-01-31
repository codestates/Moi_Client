import { useDispatch } from 'react-redux';
import * as actions from '../../../modules/config/actions';
import * as initInfo from '../../../modules/changeField/info/actions';
import * as skills from '../../../modules/changeField/skills/actions';
import * as workExperience from '../../../modules/changeField/workExperience/actions';
import * as education from '../../../modules/changeField/education/actions';
import * as aea from '../../../modules/changeField/aea/actions';

function useSelectTemplate(): {
  selectTemplate: (templateCode: number) => void;
  initResumeField: () => void;
} {
  const dispatch = useDispatch();

  const selectTemplate = (templateCode: number) => {
    if (localStorage.getItem('current_user')) {
      localStorage.removeItem('resume-field');
    }
    dispatch(actions.selectTemplate({ value: templateCode }));
    localStorage.removeItem('edit_field');
  };

  const initResumeField = () => {
    dispatch(initInfo.initInfoField(''));
    dispatch(skills.initSkillsField(''));
    dispatch(workExperience.initExperienceField(''));
    dispatch(education.initEducationField(''));
    dispatch(aea.initAeaField(''));
  };
  return {
    selectTemplate,
    initResumeField,
  };
}

export default useSelectTemplate;
