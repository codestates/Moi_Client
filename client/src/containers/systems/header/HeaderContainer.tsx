import React from 'react';
import Header from '../../../components/systems/header/Header';

// * ====================
// *   CUSTOM_HOOKS
// * ====================
import useDropdown from '../../../hooks/systems/header/useDropdown';

const HeaderContainer: React.FC = () => {
  const { dropdown, onDropdown } = useDropdown();
  return (
    <>
      <Header dropdown={dropdown} onDropdown={onDropdown} />
    </>
  );
};

export default HeaderContainer;
