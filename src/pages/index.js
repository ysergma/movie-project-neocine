import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Cards from "../components/Cards"
import { fetcher } from "../../util/API"
import Moviescredits from "../components/Moviescredits"
import Tvcredits from "../components/Tvcredits"

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
      <Tvcredits />
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
