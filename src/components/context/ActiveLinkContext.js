import React, { createContext, useContext, useState } from 'react';

const ActiveLinkContext = createContext();

export const useActiveLink = () => useContext(ActiveLinkContext);

export const ActiveLinkProvider = ({ children }) => {
  const [active, setActive] = useState('home');

  return (
    <ActiveLinkContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};
