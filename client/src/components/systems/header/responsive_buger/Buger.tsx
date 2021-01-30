import React from 'react';
import styles from '../../../../styles/systems/header/Buger.module.css';
import headerLogo from '../../../../public/headerLogo.png';
import { GoX } from 'react-icons/go';

// ? ====================
// ?   INTERFACE
// ? ====================
interface BugerProps {
  bugerMenu: boolean;
  onBugerMenu: () => void;
  hadleLoginModal: () => void;
  isLoggedIn: boolean;
  logout: boolean;
  requestSignOut: () => void;
  onWithdrawal: () => void;
  onAuthCheckModal: (state: boolean, type: string) => void;
}
// * ====================
// *  REACT.FC
// * ====================
const Buger: React.FC<BugerProps> = ({
  bugerMenu,
  onBugerMenu,
  hadleLoginModal,
  isLoggedIn,
  logout,
  requestSignOut,
  onWithdrawal,
  onAuthCheckModal,
}) => {
  return (
    <nav
      className={
        bugerMenu
          ? styles.container__nav__block__avtive
          : styles.container__nav__block
      }
    >
      <span className={styles.buger__right_block}>
        <button type="button" onClick={onBugerMenu}>
          <GoX />
        </button>
      </span>
      <div className={styles.buger__logo__block}>
        <img src={headerLogo} alt="logo" />
      </div>
      <div className={styles.bugger__list_block}>
        <ul className={styles.buger__list}>
          {isLoggedIn && !logout ? (
            <div className={styles.buger__after__login__block}>
              <li>
                <button
                  className={styles.bugger__auth__button}
                  onClick={() => {
                    requestSignOut(), onBugerMenu();
                  }}
                >
                  로그아웃
                </button>
              </li>
              <li>
                <button
                  className={styles.bugger__auth__button}
                  onClick={() => {
                    onWithdrawal(), onBugerMenu();
                  }}
                >
                  회원탈퇴
                </button>
              </li>
            </div>
          ) : (
            <li>
              <button
                className={styles.bugger__auth__button}
                onClick={() => {
                  hadleLoginModal(), onBugerMenu();
                }}
              >
                로그인
              </button>
            </li>
          )}

          <li>
            <button
              className={styles.bugger__auth__button}
              onClick={() => {
                onAuthCheckModal(true, 'write'), onBugerMenu();
              }}
            >
              이력서 작성하기
            </button>
          </li>
          <li>
            <button
              className={styles.bugger__auth__button}
              onClick={() => {
                onAuthCheckModal(true, 'mypage'), onBugerMenu();
              }}
            >
              내 이력서
            </button>
          </li>
          <li>
            <a href="/ask">문의하기</a>
          </li>
        </ul>
        <p className={styles.buger__list__copyright}>2021 © moi.co.kr</p>
      </div>
    </nav>
  );
};

export default Buger;
