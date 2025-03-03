import React from 'react';
import DataProvider from './assets/context/DataProvider'; // Import DataProvider
import Code from './components/Code'; // Your Code component that uses DataContext
import Head from './components/Head';
import Result from './components/Result';

const App = () => {
  return (
    <DataProvider>
      <Head/>
      <Code /> 
       {/* Code component has access to the context */}
    <Result/>
    </DataProvider>
  );
};

export default App;
