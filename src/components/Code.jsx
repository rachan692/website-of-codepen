import React, { useContext } from 'react';
import Editor from './Editor';
import { Box, styled } from '@mui/material';
import { DataContext } from '../assets/context/DataProvider';  // Corrected relative path

const Container = styled(Box)`
  display: flex;
`;

const Code = () => {
  const { html, sethtml, css, setcss, js, setjs } = useContext(DataContext);  // Access context values

  return (
    <Container>
      <Editor heading="HTML" icon="/" color="red" value={html} onChange={sethtml} />
      <Editor heading="CSS" icon="*" color="blue" value={css} onChange={setcss} />
      <Editor heading="Javascript" icon="()" color="yellow" value={js} onChange={setjs} />
    </Container>
  );
};

export default Code;
