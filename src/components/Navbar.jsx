import { AppBar, createTheme, IconButton, Toolbar, Typography } from "@mui/material"
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
          <NightlightRoundIcon />

          <Typography>
            Dark Mode
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>



  )
}

export default Navbar