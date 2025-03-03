import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { DataContext } from '../assets/context/DataProvider';

const Result = () => {
  const { html, css, js } = useContext(DataContext);

  // Ensure that HTML, CSS, and JS are properly wrapped in a string format
  const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <div>
      <Box>
        <iframe
          srcDoc={srcCode} // Use string as srcDoc
          title="Output"   // Corrected typo here
          sandbox="allows-scripts" // Allow scripts
          frameBorder={0}
          width="100%"
          height="100%"
        />
      </Box>
    </div>
  );
};

export default Result;
