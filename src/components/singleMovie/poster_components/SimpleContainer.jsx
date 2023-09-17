import * as React from "react"
import BasicRating from "../BasicRating"
import Buttons from "@/components/Buttons"
import Image from "next/image"

export default function SimpleContainer({ movie, image, productionCompany }) {
  console.log(productionCompany)
  return (
    <React.Fragment>
      <div
        className="simpleContainer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          borderRadius: 25,
        }}
      >
        <div className="parent">
          <div className="grid-item content">
            <h1>{movie.title}</h1>
            <BasicRating movie={movie} />
            <p>{movie.overview}</p> <br />
            <b> Release date :</b> {movie.release_date} <br /> <b> language:</b>{" "}
            {movie.original_language}{" "}
          </div>
          <div className="grid-item poster">
            <Image src={image} id="movie-image" alt="" />
          </div>
          <div className="grid-item">
            <Buttons href="" btext="watch trailer">
              {" "}
            </Buttons>
          </div>
          <div className="grid-item">
            <strong>Production companies: </strong> <br />
            {productionCompany.map((company) => (
              <div style={{ display: "inline-block" }} key={company.id}>
                {" "}
                <pre>
                  <span>{company.name}</span>{" "}
                </pre>
                <Image
                  style={{ maxWidth: "20px" }}
                  src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                  alt="logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
