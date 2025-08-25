// FirstLoadContext.jsx
import { createContext, useContext, useRef } from 'react';

const FirstLoadContext = createContext();

export const FirstLoadProvider = ({ children }) => {
  const isFirstLoadRef = useRef(true); // stays true only on first ever access
  return (
    <FirstLoadContext.Provider value={isFirstLoadRef}>
      {children}
    </FirstLoadContext.Provider>
  );
};

// ✅ This hook consumes (and resets) the first load flag
export const useConsumeFirstLoad = () => {
  const ref = useContext(FirstLoadContext);
  const isFirst = ref.current;
  if (isFirst) ref.current = false;
  return isFirst;
};
