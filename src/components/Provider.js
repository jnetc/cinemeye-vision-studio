import React from 'react';

export const Context = React.createContext();

const Provider = ({ children }) => {
  return <Context value={}>{children}</Context>;
};

export default Provider;
