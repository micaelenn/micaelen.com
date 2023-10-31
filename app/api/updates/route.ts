
import { getTrackInformation } from '@/lib/spotify'
import { getMediaInformation } from '@/lib/tracktv'

export async function GET() {
  const Updates = {
    listening : await getTrackInformation(),
    learning: "Ruby",
    watchedMovie: await getMediaInformation('movies'),
    watching: await getMediaInformation('shows'),
    playing: "League of Legends",
  }

  return Response.json( Updates );
}

