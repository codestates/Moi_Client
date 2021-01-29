import { useState } from 'react';

function useUserDropDown(): {
  userDropdown: boolean;
  onUserDropdown: (state: boolean) => void;
} {
  const [userDropdown, setUserDropdown] = useState<boolean>(false);
  const onUserDropdown = (state: boolean) => {
    setUserDropdown(state);
  };

  return { userDropdown, onUserDropdown };
}

export default useUserDropDown;
