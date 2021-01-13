import { useState } from 'react';

// ? ====================
// ?   CUSTOM_HOOK
// ? ====================
function useBugerMenu(): {
  bugerMenu: boolean;
  onBugerMenu: () => void;
} {
  const [bugerMenu, setbugerMenu] = useState<boolean>(false);
  const onBugerMenu = () => {
    setbugerMenu(!bugerMenu);
  };

  return {
    bugerMenu,
    onBugerMenu,
  };
}

export default useBugerMenu;
