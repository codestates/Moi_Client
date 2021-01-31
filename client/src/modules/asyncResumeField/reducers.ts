import { createReducer } from 'typesafe-actions';
import { SaveEditResumeState, Actions } from './types';
import {
  SAVE_RESUME_FIELD_REQUEST,
  SAVE_RESUME_FIELD_SUCCESS,
  SAVE_RESUME_FIELD_FAILURE,
  EDIT_RESUME_FIELD_REQUEST,
  EDIT_RESUME_FIELD_SUCCESS,
  EDIT_RESUME_FIELD_FAILURE,
  UPDATE_RESUME_FIELD_REQUEST,
  UPDATE_RESUME_FIELD_SUCCESS,
  UPDATE_RESUME_FIELD_FAILURE,
  ON_UPLOAD_IMAGE_REQUEST,
  ON_UPLOAD_IMAGE_SUCCESS,
  ON_UPLOAD_IMAGE_FAILURE,
  DELETE_RESUME_FIELD_REQUEST,
  DELETE_RESUME_FIELD_SUCCESS,
  DELETE_RESUME_FIELD_FAILURE,
} from './actions';

const initialState: SaveEditResumeState = {
  saveResume: {
    save: null,
    message: null,
  },
  editResume: {
    resume: null,
    message: null,
  },
  updateResume: {
    isEdited: null,
    newResume: null,
  },
  uploadImage: { location: '', isUpload: null },
  deleteResume: { isDeleted: false, message: null },
};

const asyncResumeField = createReducer<SaveEditResumeState, Actions>(
  initialState,
  {
    [SAVE_RESUME_FIELD_REQUEST]: (state) => ({
      ...state,
    }),
    [SAVE_RESUME_FIELD_SUCCESS]: (state, action) => ({
      ...state,
      saveResume: {
        ['save']: action.payload.save,
        ['message']: null,
      },
    }),
    [SAVE_RESUME_FIELD_FAILURE]: (state, action) => ({
      ...state,
      saveResume: {
        ['save']: false,
        ['message']: action.payload.message,
      },
    }),
    [EDIT_RESUME_FIELD_REQUEST]: (state) => ({
      ...state,
    }),
    [EDIT_RESUME_FIELD_SUCCESS]: (state, action) => ({
      ...state,
      editResume: {
        ['resume']: action.payload.resume,
        ['message']: null,
      },
    }),
    [EDIT_RESUME_FIELD_FAILURE]: (state, action) => ({
      ...state,
      editResume: {
        ['resume']: null,
        ['message']: action.payload.message,
      },
    }),
    [UPDATE_RESUME_FIELD_REQUEST]: (state) => ({
      ...state,
    }),
    [UPDATE_RESUME_FIELD_SUCCESS]: (state, action) => ({
      ...state,
      updateResume: {
        ['newResume']: action.payload.newResume,
        ['isEdited']: null,
      },
    }),
    [UPDATE_RESUME_FIELD_FAILURE]: (state, action) => ({
      ...state,
      updateResume: {
        ['newResume']: null,
        ['isEdited']: action.payload.isEdited,
      },
    }),
    [ON_UPLOAD_IMAGE_REQUEST]: (state) => ({
      ...state,
    }),
    [ON_UPLOAD_IMAGE_SUCCESS]: (state, action) => ({
      ...state,
      uploadImage: {
        ['location']: action.payload.location,
        ['isUpload']: null,
      },
    }),
    [ON_UPLOAD_IMAGE_FAILURE]: (state, action) => ({
      ...state,
      uploadImage: {
        ['location']: null,
        ['isUpload']: action.payload.isUpload,
      },
    }),
    [DELETE_RESUME_FIELD_REQUEST]: (state) => ({
      ...state,
    }),
    [DELETE_RESUME_FIELD_SUCCESS]: (state, action) => ({
      ...state,
      deleteResume: {
        isDeleted: action.payload.isDeleted,
        message: null,
      },
    }),
    [DELETE_RESUME_FIELD_FAILURE]: (state, action) => ({
      ...state,
      deleteResume: {
        isDeleted: false,
        message: action.payload.message,
      },
    }),
  },
);
export default asyncResumeField;
