import * as React from "react"
import SizeAvatars from "@/components/singleMovie/actorAvatar"
import Moviecards from "./similarMovies"

export default function TrailerActorContainer({
  relatedMovies,
  actors,
  video,
}) {
  const array1 = actors.cast.slice(0, 5)
  const array2 = relatedMovies.slice(0, 5)
  console.log(array2)
  return (
    <>
      <div className="trailer_actor_Container">
        <div>
          <h2>Trailer:</h2>
          <iframe
            id="video"
            width="800"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            style={{ borderRadius: "5%" }}
            allowFullScreen
          ></iframe>
        </div>

        <div className="five_actors_container">
          <h2>Actors:</h2>
          <SizeAvatars className="actorCard" array={array1}></SizeAvatars>
        </div>
      </div>

      <div className="cardContainer">
        <h2>Similar:</h2>
        <Moviecards className="actorCard" array={array2}></Moviecards>
      </div>
    </>
  )
}
