//poster component
import React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import BasicRating from "./BasicRating"

export default function Poster({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  return (
    <Card
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        borderRadius: 5,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <BasicRating movie={movie} />
        <Typography variant="body2">{movie.overview}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          watch trailer
        </Button>
      </CardActions>
    </Card>
  )
}
