import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/Write.module.css';

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================
interface UserInfoProps {
  username: string;
  address: string;
  phone: string;
  email: string;
  title: string;
  onChangeFields: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({
  username,
  address,
  phone,
  title,
  email,
  onChangeFields,
}) => {
  return (
    <article className={styles.userinfo_container}>
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
