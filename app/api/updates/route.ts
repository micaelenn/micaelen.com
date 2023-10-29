
import { getTrackInformation } from '@/lib/spotify'
import { getMediaInformation } from '@/lib/tracktv'

export async function GET() {
  const Updates = {
    listening : await getTrackInformation(),
    learning: "Ruby",
    watchedMovie: await getMediaInformation('movies'),
    watchedShow: await getMediaInformation('shows'),
    playing: "League of Legends", // TODO: get dynamically
  }

  return Response.json( Updates );
}

