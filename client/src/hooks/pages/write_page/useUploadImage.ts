import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/asyncResumeField/actions';
import { SaveEditResumeState } from '../../../modules/asyncResumeField/types';

function useSkillsChangeField(): {
  uploadImage: (file: File) => void;
  location: string | null;
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  const { location } = useSelector(
    ({ asyncResumeField }: { asyncResumeField: SaveEditResumeState }) => ({
      location: asyncResumeField.uploadImage.location,
    }),
  );
  const uploadImage = (file: File) => {
    const formData = new FormData();

    formData.append('profileImage', file);

    dispatch(actions.onUploadImageRequest({ formData }));
  };
  return { uploadImage, location };
}

export default useSkillsChangeField;
