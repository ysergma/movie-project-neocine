import Head from "next/head"
import Image from "next/image"
import Cards from "@/components/Cards"
import { fetcher } from "../../util/API"
import Slider from "@/components/Slider"
import CardsSlider from "@/components/CardsSlider"
import styles from "@/styles/Home.module.css"

export default function Home({ latestMovie }) {
  const latestThreeMovies = latestMovie.results.slice(0, 3)
  const latestFiveMovies = latestMovie.results.slice(0, 60)
  return (
    <>
      <div class="container">
        <div class="overlay-container">
          <svg width="100%" height="100%" viewBox="0 0 1730 740">
            <path
              d="M-19 0.5H1732V788.5H-19V0.5Z"
              fill="url(#paint0_linear_13_2461)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13_2461"
                x1="674.538"
                y1="918.999"
                x2="667.631"
                y2="97.4997"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.270833"
                  stop-color="#0D0C0F"
                  stop-opacity="0.85"
                />
                <stop offset="0.46875" stop-color="#0D0C0F" stop-opacity="0" />
                <stop
                  offset="0.682292"
                  stop-color="#0D0C0F"
                  stop-opacity="0.284314"
                />
                <stop offset="1" stop-color="#0D0C0F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.test}>
          <div>
            <Slider movies={latestThreeMovies} />
          </div>
        </div>

        <div>
          <CardsSlider movies={latestFiveMovies} />
        </div>
        <div>
          <CardsSlider movies={latestFiveMovies} />
        </div>
      </div>
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
