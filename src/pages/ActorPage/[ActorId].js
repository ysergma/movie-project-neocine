// pages/actor/[actorId].js

import React from "react"
import { useRouter } from "next/router"
import ActorPage from "@/components/singleActor/ActorPage"

const ActorPageWrapper = () => {
  const router = useRouter()
  const { actorId } = router.query

  return (
    <div>
      <ActorPage actorId={actorId} />
    </div>
  )
}

export default ActorPageWrapper
