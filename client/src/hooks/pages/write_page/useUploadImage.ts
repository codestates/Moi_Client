import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/asyncResumeField/actions';
import { SaveEditResumeState } from '../../../modules/asyncResumeField/types';

function useSkillsChangeField(): {
  uploadImage: (file: File) => void;
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  // const { skills } = useSelector(
  //   ({ asyncResumeField }: { asyncResumeField: SaveEditResumeState }) => ({
  //     skills: skillsField.skills,
  //   }),
  // );
  const uploadImage = (file: File) => {
    const formData = new FormData();

    formData.append('profileImage', file);

    dispatch(actions.onUploadImageRequest({ formData }));
  };
  return { uploadImage };
}

export default useSkillsChangeField;
