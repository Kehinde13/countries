import React, { useState } from 'react'
import Body from './components/Body';
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
        minHeight={'100vh'}
      >
      
        <Navbar 
         setMode={setMode}
         mode={mode}
        />
        <Routes>
          <Route path='/countries' element={<Body />} />
          <Route path='/:name' element={<Country />} /> {/* /:name to set the name of the country from address bar */}
        </Routes>
        
      </Box>
    </ThemeProvider>
    </BrowserRouter>
    
    
  );
}

export default App;
