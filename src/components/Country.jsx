import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    List,
    ListItem,
    styled,
    Typography
} from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

const StyledSpan = styled('span')({
    fontWeight: "bold",
    marginRight: 5
})


function Country() {
    const [country, setCountry] = useState([])
    const { name } = useParams(); //to access the name from the browser address bar

    useEffect(() => {
        const getCountry = async () => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await res.json()
                setCountry(data)
            } catch (error) {
                console.log(error);
            }
        }
        getCountry()
    }, [name])

    useEffect(() => {
        document.title = `${name}`;
      }, [name]);


    return (
        <Box 
            /* sx={{
                height: {md:'600px'} 
            }} */>
            <Link to='/' style={{ textDecoration: "none" }}>
                <Button
                    variant="contained"
                    startIcon={<ArrowBack />}
                    sx={{
                        backgroundColor: "whitesmoke",
                        color: "black",
                        m: { xs: 3, md: 7 }
                    }}
                >
                    Back
                </Button>
            </Link>

            <Box mt={3} sx={{ ml: { xs: 2, md: 20 } }}>
                {country.map((item) => (
                    <Grid container key={item.population}>
                        <Grid item md={6} >
                            <Card sx={{ maxWidth: 500 }} >
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={item.flags.svg}
                                        alt={item.name.common}
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Box>
                                <Typography
                                    variant='h4'
                                    mt={2}
                                >
                                    {item.name.common}
                                </Typography>
                                <Box
                                    sx={{
                                        display: { md: "flex" }
                                    }}>
                                    <List>
                                        <ListItem>
                                            <StyledSpan>Official Name: </StyledSpan>  {item.name.official}
                                        </ListItem>
                                        <ListItem>
                                            <StyledSpan>Population: </StyledSpan>  {item.population.toLocaleString()}
                                        </ListItem>
                                        <ListItem>
                                            <StyledSpan>Region: </StyledSpan>  {item.region}
                                        </ListItem>
                                        <ListItem>
                                            <StyledSpan>Sub Region: </StyledSpan>  {item.subregion}
                                        </ListItem>
                                        <ListItem>
                                            <StyledSpan>Capital: </StyledSpan>  {item.capital}
                                        </ListItem>
                                    </List>
                                </Box>

                            </Box>
                            <Box
                              sx={{
                                display:{
                                    md: "flex"
                                }
                              }}
                            >
                                <Typography
                                    variant='h6'
                                >
                                    Border Countries:
                                </Typography>
                                { !item.borders ?
                                  <Typography variant='h6' sx={{ml: 4}}>
                                     No Borders
                                  </Typography> :
                                  item.borders.map((border, index) => (
                                    <Button 
                                    key={index} 
                                    sx={{
                                        boxShadow: 5, 
                                        mx: 1, 
                                        color:"text.primary" 
                                        }}>
                                       {border}
                                    </Button>
                                  ))
                                }
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Box>

    )
}

export default Country