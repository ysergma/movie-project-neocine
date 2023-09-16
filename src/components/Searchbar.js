import { InputAdornment, TextField } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import React, { useState, useEffect } from "react"
import SearchIcon from "@mui/icons-material/Search"
import { fetcher } from "../../util/API"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchresults, setSearchResults] = useState("")

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }
  const apiRoute = `search/movie?query=${searchTerm}&include_adult=false&language=en-US`
  const searchMovie = async (e) => {
    e.preventDefault()
    const data = await fetcher(apiRoute)
    setSearchResults(data.results)
  }

  return (
    <form onSubmit={searchMovie} maxWidth="md" sx={{ mt: 20 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        sx={{ width: 600 }}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  )
}
