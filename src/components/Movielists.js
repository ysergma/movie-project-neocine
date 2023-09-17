import React, { useState, useEffect } from "react"
import MenuItem from "@mui/material/MenuItem"
import { Box, Menu } from "@mui/material"
import { fetcher } from "../../util/API"

const Movielists = () => {
  const [movies, setMovies] = useState("")
  const [selectedMovieList, setSelectedMovieList] = useState("top_rated")
  const fetchMovies = async ({ moviestype }) => {
    const apiRoute = `/movie/${moviestype}?language=en-US`
    const data = await fetcher(apiRoute)
    console.log(data.results)
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies({ moviestype: selectedMovieList })
  }, [selectedMovieList])
  return (
    <Box display="flex" flexDirection="column" m={10}>
      <Menu open={true}>
        <MenuItem onClick={() => setSelectedMovieList("popular")}>
          Popular
        </MenuItem>
        <MenuItem onClick={() => setSelectedMovieList("top_rated")}>
          Top Rated
        </MenuItem>
        <MenuItem onClick={() => setSelectedMovieList("now_playing")}>
          Now Playing
        </MenuItem>
        <MenuItem onClick={() => setSelectedMovieList("upcoming")}>
          Upcoming
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Movielists
