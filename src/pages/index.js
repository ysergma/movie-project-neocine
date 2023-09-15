import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Cards from "../components/Cards"
import { fetcher } from "../../util/API"
import Moviescredits from "../components/Moviescredits"

export default function Home({ latestMovie }) {
  return (
    <>
      {latestMovie.results.map((movie, index) => {
        return (
          <div key={index}>
            <Cards {...movie} />
          </div>
        )
      })}
      <Moviescredits />
    </>
  )
}

export async function getStaticProps() {
  const data = await fetcher("trending/movie/day?language=en-US")
  return {
    props: {
      latestMovie: data,
    },
  }
}
