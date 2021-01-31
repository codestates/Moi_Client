import React from 'react';
import styles from '../../../../styles/pages/ask_page/ask/Ask.module.css';
interface AskProps {
  username: string;
  email: string;
  title: string;
  desc: string;
  onChangeAskFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreas: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAskRequest: (
    username: string,
    email: string,
    title: string,
    desc: string,
  ) => void;
}
const Ask: React.FC<AskProps> = ({
  username,
  email,
  title,
  desc,
  onChangeAskFields,
  onChangeTextAreas,
  onAskRequest,
}) => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <div className={styles.ask__formContainer}>
          <div className={styles.ask__title}>문의사항</div>
          <p className={styles.ask__desc}>
            문의하실 내용과 이름 이메일을 적어주세요
          </p>
          <form className={styles.ask__form}>
            <div className={styles.ask__form__item}>
              <label className={styles.ask__form__name}>이름</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={onChangeAskFields}
                placeholder="이름을 입력해주세요"
              />
            </div>
            <div className={styles.ask__form__item}>
              <label className={styles.ask__form__email}>이메일</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChangeAskFields}
                placeholder="이메일을 입력해주세요"
              />
            </div>
            <div className={styles.ask__form__item__title}>
              <label className={styles.ask__form__title}>제목</label>
              <input
                className={styles.ask__form__input}
                type="text"
                name="title"
                value={title}
                onChange={onChangeAskFields}
                placeholder="제목을 입력해주세요"
              />
            </div>
            <div className={styles.ask__form__item__title}>
              <label className={styles.ask__form__title}>문의 내용</label>
              <textarea
                className={styles.ask__textarea}
                name="desc"
                value={desc}
                onChange={onChangeTextAreas}
                placeholder="문의 내용을 입력해주세요"
              />
            </div>
          </form>
          <div className={styles.ask__buttonContainer}>
            <button
              onClick={() => {
                onAskRequest(username, email, title, desc);
              }}
            >
              문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;
