import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const usePreviousPath = () => {
  const location = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    prevPath.current = location.pathname;
  }, [location]);

  return prevPath.current;
};


export default usePreviousPath;