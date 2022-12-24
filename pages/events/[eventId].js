import React from 'react'
import { useRouter } from 'next/router'

function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId
  return (
    <h1>Event Number {eventId}</h1>
  )
}

export default EventDetailPage