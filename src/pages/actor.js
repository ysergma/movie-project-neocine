import { Grid } from "@mui/material"
import { fetcher } from "../../util/API"
import Cards from "@/components/Cards"
import Link from "next/link"
import styles from "../styles/movies.module.css"
import SearchBar from "@/components/Searchbar"
import { useState, useEffect } from "react"
const Movies = ({ latestMovie }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  // search/person?query=1&include_adult=false&langua
  const handleSearch = async (searchTerm) => {
    const apiRoute = `search/person?query=${searchTerm}&include_adult=false&language=en-US`
    const data = await fetcher(apiRoute)
    setSearchResults(data.results)
  }
  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm])
  const moviesToDisplay = searchTerm ? searchResults : latestMovie.results
  return (
    <div className={styles.wrapper}>
      <SearchBar onSearch={setSearchTerm} />

      <Grid container spacing={2}>
        {moviesToDisplay.map((movie) => {
          return (
            <Grid key={movie.id} item md={3} className={styles.gridItem}>
              <Link href={`/${movie.id}`}>
                <Cards title={movie.name} poster_path={movie.profile_path} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
export default Movies

export async function getStaticProps() {
  const data = await fetcher("trending/person/day?language=en-US")
  return {
    props: {
      latestMovie: data,
    },
  }
}
