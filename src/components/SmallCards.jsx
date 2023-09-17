import React from "react"
import PropTypes from "prop-types"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Skeleton from "@mui/material/Skeleton"

function SmallCards({
  title,
  vote_average,
  release_date,
  backdrop_path,
  loading,
}) {
  const imageSrc = `https://image.tmdb.org/t/p/original${backdrop_path}`

  return (
    <Grid container wrap="nowrap">
      <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        {loading ? (
          <>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </>
        ) : (
          <>
            <img
              style={{ width: 200, height: 118 }}
              alt={title}
              src={imageSrc}
            />
            <Box sx={{ pr: 1 }}>
              <Typography gutterBottom variant="body2">
                {title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                Vote : {vote_average} Date :{release_date}
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Grid>
  )
}

SmallCards.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  loading: PropTypes.bool,
}

export default SmallCards
