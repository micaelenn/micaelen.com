
import { getTrackInformation } from '@/lib/spotify'
import { getMediaInformation } from '@/lib/tracktv'
import { getStaticUpdates } from '@/lib/sanity/general'

export async function GET() {
  const staticUpdates = await getStaticUpdates()

  const listening = await getTrackInformation()
  const watchedMovie = await getMediaInformation('movies')
  const watching = await getMediaInformation('shows')
  const learning = staticUpdates.learning
  const location = staticUpdates.location
  const playing = staticUpdates.playing

  const Updates = {
    listening : listening,
    learning: learning,
    watching: watching,
    watchedMovie: watchedMovie,
    location: location,
    playing: playing
  }

  return Response.json( Updates );
}

