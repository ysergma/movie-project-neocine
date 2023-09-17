//actor avatar component
import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function SizeAvatars({ array }) {
  return (
    <>
      <Stack direction="row" spacing={10}>
        {array.map((actor) => (
          <Avatar
            key={actor.id}
            alt="Remy Sharp"
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            sx={{ width: 56, height: 56 }}
          />
        ))}
      </Stack>
      <div className="actorName">
        {array.map((actor) => {
          return (
            <Typography key={actor.id} component="div">
              {actor.name}
            </Typography>
          )
        })}
      </div>
    </>
  )
}
