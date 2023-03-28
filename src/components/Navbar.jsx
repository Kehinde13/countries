import 
{ AppBar,  
  IconButton, 
  Toolbar, 
  Typography 
} from "@mui/material"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import React from "react"



function Navbar(props) {

  return (
    <AppBar 
     position="sticky" 
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>
          Where in the world
        </Typography>


        <IconButton
          color="inherit"
          onClick={e => props.setMode(props.mode === "light" ? "dark" : "light")}
        > 
           { props.mode === 'dark' ? <WbSunnyIcon /> : <NightlightRoundIcon /> }
          <Typography>
           { props.mode === 'dark' ? "Light Mode" : "Dark Mode"}
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>



  )
}

export default Navbar