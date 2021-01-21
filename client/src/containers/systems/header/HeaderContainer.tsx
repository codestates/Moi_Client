import React from 'react';
import Header from '../../../components/systems/header/Header';
import { Link } from 'react-scroll';

//* REACT_ICONS
import {
  FcBusinessman,
  FcVoicePresentation,
  FcViewDetails,
} from 'react-icons/fc';

// * ====================
// *   IMPORT_CUSTOM_HOOKS
// * ====================
import useDropdown from '../../../hooks/systems/header/useDropdown';
import useBugerMenu from '../../../hooks/systems/header/useBugerMenu';
import useLoginModal from '../../../hooks/systems/header/useLoginModal';

const HeaderContainer: React.FC = () => {
  // * ====================
  // *   CUSTOM_HOOKS
  // * ====================
  const { dropdown, onDropdown } = useDropdown();
  const { bugerMenu, onBugerMenu } = useBugerMenu();
  const { modal, onLoginModal } = useLoginModal();
  // * ====================
  // *   FUNCTIONS
  // * ====================
  const onScroll = (destination: string, name: string) => {
    const description = <FcBusinessman />;
    const review = <FcVoicePresentation />;
    const guide = <FcViewDetails />;

    return (
      <Link
        activeClass="active"
        to={destination}
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => onDropdown(false)}
      >
        {destination === 'description'
          ? description
          : destination === 'review'
          ? review
          : destination === 'guide'
          ? guide
          : null}
        {name}
      </Link>
    );
  };

  // * ====================
  // *   RENDER
  // * ====================
  return (
    <>
      <Header
        dropdown={dropdown}
        onDropdown={onDropdown}
        bugerMenu={bugerMenu}
        onBugerMenu={onBugerMenu}
        onScroll={onScroll}
        modal={modal}
        onLoginModal={onLoginModal}
      />
    </>
  );
};

export default HeaderContainer;
