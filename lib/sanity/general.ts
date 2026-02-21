import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'
import { getTrackInformation } from '@/lib/spotify'
import { getLastWatched } from '@/lib/traktv'

// GENERAL CONTENT
export const getGeneralData = async () => {
  const data = await client.fetch(
    `*[_type == "${schemas.general}"][0] {
      socialMedias,
      title,
      updates, 
      menu
    }`
  )

  // dynamic updates
  const updates = data.updates
  const listening = await getTrackInformation()
  const watchedMovie = await getLastWatched('movies')
  const watching = await getLastWatched('shows')

  const content = {
    menu: data.menu,
    header: {
      title: data.title,
      updates: {
        listening: listening,
        learning: updates.learning,
        watching: watching,
        location: updates.location,
        watchedMovie: watchedMovie,
        playing: updates.playing,
        version: updates.version
      },
    },
  }

  return content
}