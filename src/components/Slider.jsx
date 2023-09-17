import * as React from "react"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import MobileStepper from "@mui/material/MobileStepper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Buttons from "@/components/Buttons"
import "@/styles/slider.module.css"
import Image from "next/image"

export default function Slider({ movies }) {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = movies.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Card sx={{ maxWidth: "100%", background: "transparent" }}>
        <CardMedia
          className="slider"
          component="img"
          alt={movies[activeStep].title}
          height="540"
          image={`https://image.tmdb.org/t/p/original${movies[activeStep].backdrop_path}`}
        />
        <CardContent className="CardContent">
          <Typography gutterBottom variant="h5" component="div">
            {movies[activeStep].title}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions className="sliderbutton">
          <Buttons
            btext={
              <div>
                <img src="/play.svg" style={{ marginTop: "10px" }} /> Continue
                Watching
              </div>
            }
          />
          <Button className="button" size="small">
            Watchlist
          </Button>
        </CardActions>
      </Card>
      <MobileStepper
        className="sliderarrows"
        position="static"
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  )
}
