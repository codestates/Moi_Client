import { useDispatch } from 'react-redux';
import * as info from '../../../modules/changeField/info/actions';
import * as skills from '../../../modules/changeField/skills/actions';
import * as experience from '../../../modules/changeField/workExperience/actions';
import * as educations from '../../../modules/changeField/education/actions';
import * as aeas from '../../../modules/changeField/aea/actions';

function useSaveLocalStorage(): {
  loadInfoField: () => void;
} {
  const dispatch = useDispatch();

  const loadInfoField = () => {
    if (localStorage.getItem('resume-field')) {
      const localState = JSON.parse(
        localStorage.getItem('resume-field') || '{}',
      );
      dispatch(info.loadInfoField({ state: localState.info }));
      dispatch(skills.loadSkillsField({ state: localState.skills }));
      dispatch(
        experience.loadExperienceField({ state: localState.workExperience }),
      );
      dispatch(educations.loadEducationField({ state: localState.educations }));
      dispatch(aeas.loadAeaField({ state: localState.aeas }));
    }
  };

  return { loadInfoField };
  // * VARIABLE & FUNCTIONS
}

export default useSaveLocalStorage;
