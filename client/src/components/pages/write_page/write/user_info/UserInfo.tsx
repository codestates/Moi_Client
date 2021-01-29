import React, { useEffect } from 'react';
import styles from '../../../../../styles/pages/write_page/write/Write.module.css';
import { GoPerson } from 'react-icons/go';
import { ReactImageCropperTs } from '../../../../../components/systems/imageCrop/ImageCrop';
import useUploadImage from '../../../../../hooks/pages/write_page/useUploadImage';

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================
interface UserInfoProps {
  username: string;
  address: string;
  phone: string;
  email: string;
  title: string;
  avatar: string;
  onChangeFields: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadModal: boolean;
  onUploadModal: () => void;
  onChangeAvatarField: <T>(location: T, value: T) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({
  username,
  address,
  phone,
  title,
  avatar,
  email,
  onChangeFields,
  uploadModal,
  onUploadModal,
  onChangeAvatarField,
}) => {
  const { uploadImage, location } = useUploadImage();
  const onGetBlobFile = (blobFile: File) => {
    uploadImage(blobFile);
  };

  useEffect(() => {
    onChangeAvatarField('avatar', location);
  }, [location]);

  return (
    <article className={styles.userinfo_container}>
      {uploadModal && (
        <ReactImageCropperTs
          onGetBlobFile={onGetBlobFile}
          placeholderImage=""
          style={{ maxHeight: '25vh', maxWidth: '25vw' }}
          onUploadModal={onUploadModal}
        />
      )}
      {localStorage.getItem('current_user') && (
        <div className={styles.userinfo_resume_title_block__div}>
          <input
            type="text"
            placeholder="이력서의 이름을 기재해주세요"
            name="title"
            value={title}
            onChange={onChangeFields}
          />
        </div>
      )}
      <div className={styles.userinfo_title}>인적사항</div>
      <p className={styles.skills_sub_title__p}>
        이름과 주소 연락처 등과 같은 인적사항을 입력해주세요
      </p>
      <div className={styles.userinfo_formContainer}>
        {/* ImageUpload */}
        <div className={styles.imageUpload_block__div}>
          {location || avatar ? (
            <img
              style={{
                width: '48px',
                borderRadius: '7px',
                marginRight: '15px',
              }}
              src={location || avatar}
              alt="uploadImg"
            />
          ) : (
            <button
              className={styles.imageUpload_button__button}
              onClick={onUploadModal}
            >
              <GoPerson />
            </button>
          )}
          <span>
            <button
              className={styles.sub_Upload_button__button}
              onClick={onUploadModal}
            >
              사진 업로드
            </button>
          </span>
        </div>

        <form className={styles.userinfo_form}>
          <div className={styles.userinfo_form_item}>
            <label className={styles.userinfo_form_name}>이름</label>
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              name="username"
              value={username}
              onChange={onChangeFields}
            />
          </div>
          <div className={styles.userinfo_form_item}>
            <label className={styles.userinfo_form_address}>주소</label>
            <input
              type="text"
              placeholder="주소를 입력해주세요"
              name="address"
              value={address}
              onChange={onChangeFields}
            />
          </div>
          <div className={styles.userinfo_form_item}>
            <label className={styles.userinfo_form_phoneNumber}>연락처</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={onChangeFields}
              placeholder="ex) xxxx-xxxx-xxxx"
            />
          </div>
          <div className={styles.userinfo_form_item}>
            <label className={styles.userinfo_form_email}>이메일</label>
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              name="email"
              value={email}
              onChange={onChangeFields}
            />
          </div>
        </form>
      </div>
    </article>
  );
};

export default UserInfo;
