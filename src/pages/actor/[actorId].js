import React from "react"
import Poster from "@/components/singleMovie/Poster"
import { fetcher } from "../../../util/API"
import TrailerActorContainer from "@/components/singleMovie/Container"

export default function ActorPage({ actor }) {
  console.log("this is actor", actor)
  return <h1>hello ppl</h1>
}

// Define the getServerSideProps function to fetch data for a specific actor
export async function getServerSideProps(context) {
  const { actorId } = context.query

  const actor = await fetcher(`person/${actorId}?language=en-US`)

  return {
    props: {
      actor: actor,
    },
  }
}
