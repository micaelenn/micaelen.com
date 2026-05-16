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

  const updates = data.updates
  const listening = await getTrackInformation()
  const watchedMovie = await getLastWatched('movies')
  const watching = await getLastWatched('shows')

  updates.unshift(listening)
  updates.push(watchedMovie)
  updates.push(watching)

  const content = {
    menu: data.menu,
    header: {
      title: data.title,
      updates: updates
    },
  }

  return content
}