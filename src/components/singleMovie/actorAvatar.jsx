//actor avatar component
import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"

export default function SizeAvatars({ array }) {
  return (
    <div className="actorsnamePic">
      <Stack direction="row" sx={{ gap: "4%" }} spacing={1}>
        {array.map((actor) => (
          <div key={actor.id}>
            <Avatar
              alt={actor.name}
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              sx={{ width: 56, height: 56, margin: "20px" }}
            />
            <span>{actor.name}</span>
          </div>
        ))}
      </Stack>
    </div>
  )
}
