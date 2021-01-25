import { useSelector, useDispatch } from 'react-redux';

function useSignOut(): {
  requestSignOut: () => void;
} {
  const dispatch = useDispatch();

  const requestSignOut = () => {
    localStorage.removeItem('isLoggedIn');
  };
  return {
    requestSignOut,
  };
}

export default useSignOut;
