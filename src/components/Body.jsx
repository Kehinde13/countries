import {
  Box,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import SearchIcon from '@mui/icons-material/Search';



function Body() {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState("")
  const regions =  [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];

  useEffect(() => {
    document.title = `Countries`;
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json()
        setCountries(data)
      } catch (error) {
        console.log(error);
      }
    };

    getCountries()
  }, [])

  const getSearched = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
      const data = await res.json()
      setCountries(data)
    } catch (error) {
      console.log(error);
    }
  }

  const getFiltered = async (region) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
      const data = await res.json()
      setCountries(data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    getSearched()
  }

  const handleFilter = (e) => {
    e.preventDefault()
      getFiltered() 
  }

  return (
    <Box bgcolor={"background.default"}>

      <Box
        sx={{
          minWidth: 120,
          display: { md: 'flex' },
          justifyContent: "space-between",
          mx: 2,
          mt: 3
        }}>

        <FormControl
          sx={{
            m: 1,
            width: { xs: '100%', md: '25ch' },
            mb: 2
          }}>
          <InputLabel htmlFor="search-for-a-country">Search for a country</InputLabel>
          <Input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            required
            endAdornment={
              <SearchIcon
                onClick={handleSearch}
                cursor={"pointer"}
              />
            }
          />

        </FormControl>

        <FormControl
          onSubmit={handleFilter}
          sx={{
            width: 200
          }}
        >
          <InputLabel id="Filter By Region">Filter By Region</InputLabel>
          <Select
            labelId="Filter By Region"
            id="Filter By Region"
            label="Filter By Region"
            value={regions.name}
            onChange={(e) => getFiltered(e.target.value)}
          >
            {regions.map((region, index) => (
                  <MenuItem key={index} value={region.name}>
                    {region.name}
                  </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={2} mt={2}>
        {countries.length === 0 ? 
          (<div className='loader'></div>) :
            Array.isArray(countries) ?
            countries.map((country) => (
              <Grid item xs={12} md={3} mt={5} 
                className='grid'
                key={country.name.common}>
                <Cards {...country} />
              </Grid>
            ))
          : (<Typography
            variant='h6'
            sx={{
              mx: "auto",
              fontWeight: "bold"
            }}
          >
            Country does not exist
          </Typography>)
        }
      </Grid>
    </Box>
  )
}

export default Body