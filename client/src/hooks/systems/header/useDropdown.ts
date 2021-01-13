import { useState } from 'react';

// ? ====================
// ?   CUSTOM_HOOK
// ? ====================
function useDropdown(): {
  dropdown: boolean;
  onDropdown: (state: boolean, location?: string) => void;
} {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const onDropdown = (state: boolean, location?: string) => {
    if (location === 'overView' && dropdown) {
      return setDropdown(false);
    }
    setDropdown(state);
  };

  return {
    dropdown,
    onDropdown,
  };
}

export default useDropdown;
