import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext();

// DataProvider component to provide state
const DataProvider = ({ children }) => {
  const [html, sethtml] = useState('');
  const [css, setcss] = useState('');
  const [js, setjs] = useState('');

  return (
    <DataContext.Provider value={{ html, sethtml, css, setcss, js, setjs }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
