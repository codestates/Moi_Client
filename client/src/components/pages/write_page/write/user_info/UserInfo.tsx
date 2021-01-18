import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/Write.module.css';

const UserInfo: React.FC = () => {
  return (
    <article className={styles.userinfo_container}>
      <div className={styles.userinfo_title}>인적사항</div>
      <div className={styles.userinfo_formContainer}>
        <form className={styles.userinfo_form}>
          <div>
            <label className={styles.userinfo_form_name}>이름</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label className={styles.userinfo_form_address}>주소</label>
            <input type="text" name="address" />
          </div>
          <div>
            <label className={styles.userinfo_form_phoneNumber}>연락처</label>
            <input type="tel" name="phone" />
          </div>
          <div>
            <label className={styles.userinfo_form_email}>이메일</label>
            <input type="email" name="email" />
          </div>
        </form>
      </div>
    </article>
  );
};

export default UserInfo;
