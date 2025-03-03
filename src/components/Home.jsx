import React from 'react';
import Head from './Head';  // Component for setting meta info
import Code from './Code';  // Main content or editor section
import Result from './Result';

const Home = () => {
  return (
    <>
      <Head />  {/* This will set meta information */}
      <Code />  {/* Render the code editor or main content */}
  <Result/>
    </>
  );
};

export default Home;
