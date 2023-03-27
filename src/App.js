import React, { useState } from 'react'
import Body from './components/Body';
import Navbar from "./components/Navbar";
import Error from './components/Error';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Country from './components/Country';


function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  

  return (
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <Box 
      bgcolor={"background.default"} 
      color={"text.primary"} 
      minHeight={'650px'}
      >
      
        <Navbar 
         setMode={setMode}
         mode={mode}
        />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='*' element={<Error />} />
          <Route path='/:name' element={<Country />} />
        </Routes>
        
      </Box>
    </ThemeProvider>
    </BrowserRouter>
    
    
  );
}

export default App;
