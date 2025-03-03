import { Box, styled } from '@mui/material';
import React, { useState } from 'react';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Container = styled(Box)`
flex-grow:1,
flex-basic:0,  
display: flex;
  flex-direction: column;
  width: 100%;
`;

const Heading = styled(Box)`
  background: black;
  display: flex;
  align-items: center;
  padding: 9px 12px;
  color: white;
  justify-content: space-between;  /* Distribute space between left and right content */
  width: 100%;
`;

const Editor = ({ heading, color, icon, value, onChange }) => {
  const [open, setOpen] = useState(true);
  
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  
  const getMode = () => {
    switch (heading) {
      case 'HTML':
        return 'xml';
      case 'CSS':
        return 'css';
      case 'Javascript':
        return 'javascript';
      default:
        return 'xml';
    }
  };

  return (
    <Container sx={open? null : {flexGrow:0}}>
      <Heading>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 1 }}>
          <Box
            sx={{
              backgroundColor: color,
              height: 20,
              width: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
              marginRight: 5,
              fontSize: 14,
              color: 'white',
            }}
          >
            {icon}
          </Box>
          <Box sx={{ marginLeft: 0 }}>
            {heading}
          </Box>
        </Box>
        
        {/* CloseFullscreenIcon positioned at the far-right */}
        <CloseFullscreenIcon 
          sx={{ color: 'white', fontSize: 20, cursor: 'pointer' }}
          onClick={() => setOpen(prevState => !prevState)} // Toggle open state
        />
      </Heading>

      <Box sx={{ backgroundColor: 'black', padding: '10px' }}>
        {open && (  // Conditional rendering based on the open state
          <ControlledEditor
            className="editor"
            value={value}
            onBeforeChange={handleChange}
            options={{
              mode: getMode(),
              theme: 'material',
              lineNumbers: true,
              lineWrapping: true,
              indentUnit: 1,
            }}
            style={{
              height: '200px', // Adjust height as needed
              width: '100%',
            }}
          />
        )}
      </Box>
    </Container>
  );
};

export default Editor;

