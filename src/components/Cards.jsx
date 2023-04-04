import { 
  CardActionArea, 
  CardContent, 
  CardMedia, 
  Typography, 
  Card, 
  ListItem, 
  List 
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ name, population, region, capital, flags }) {
  return (
    <Link to={`/${name.common}`} style={{ textDecoration: "none" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={flags.svg}
            alt={name.common}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name.common}
            </Typography>
            <List>
              <ListItem>
                Population: {population.toLocaleString()}
              </ListItem>
              <ListItem>
                Region: {region}
              </ListItem>
              <ListItem>
                Capital: {capital}
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>

  )
}

export default Cards