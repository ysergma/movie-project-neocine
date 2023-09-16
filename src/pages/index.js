import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Cards from "../components/Cards"
import { fetcher } from "../../util/API"
import Moviescredits from "../components/Moviescredits"
import Tvcredits from "../components/Tvcredits"
import Searchbar from "../components/Searchbar"
import Navbar from "@/components/Navbar"
import GernresList from "@/components/GenresList"

export default function Home({ latestMovie, movieGernresList }) {
  return (
    <>
      <Navbar movieGernresList={movieGernresList} />
      {/* <GernresList movieGernresList={movieGernresList}/> */}
      <Searchbar />
      {latestMovie.results.map((movie, index) => {
        return (
          <div key={index}>
            <Cards {...movie} />
          </div>
        )
      })}
      <Tvcredits />
    </>
  )
}

export async function getStaticProps() {
  const data = await fetcher("trending/movie/day?language=en-US")
  const genresData = await fetcher("genre/movie/list?language=en")
  const moviesData = await fetcher()
  return {
    props: {
      latestMovie: data,
      movieGernresList: genresData.genres,
    },
  }
}
