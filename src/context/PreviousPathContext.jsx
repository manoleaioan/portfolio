import { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PreviousPathContext = createContext(null);

export const PreviousPathProvider = ({ children }) => {
  const location = useLocation();
  const previousPathRef = useRef(null);

  useEffect(() => {
    // Update previous path after every location change
    previousPathRef.current = location.pathname;
  }, [location]);

  return (
    <PreviousPathContext.Provider value={previousPathRef}>
      {children}
    </PreviousPathContext.Provider>
  );
};

export const usePreviousPath = () => {
  const ref = useContext(PreviousPathContext);
  return ref?.current;
};
