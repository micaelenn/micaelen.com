
import { getCurrentlyPlaying } from '@/lib/spotify'

export async function GET() {
  const currentlyPlaying = await getCurrentlyPlaying();
  const trackInfo = await currentlyPlaying.json();

  const Updates = {
    playing: {
      name: trackInfo.item.name,
      artist: trackInfo.item.artists[0].name
    }
  }

  return Response.json( Updates );
}

