import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'
import { getTrackInformation } from '@/lib/spotify'
import { getMediaInformation } from '@/lib/tracktv'

// GENERAL CONTENT
export const getGeneralData = async () => {
    const data = await client.fetch(
        `*[_type == "${schemas.general}"][0] {
            socialMedias,
            updates,
            menu
        }`
    )
    
    // dynamic updates
    const listening = await getTrackInformation()
    const watchedMovie = await getMediaInformation('movies')
    const watching = await getMediaInformation('shows')

    const content = {
        header: {
            menu: data.menu,
            updates: {
                listening : listening,
                learning: data.updates.learning,
                watching: watching,
                location: data.updates.location,
                watchedMovie: watchedMovie,
                playing: data.updates.playing   
            },
        },
        footer: {
            social: data.socialMedias,
        }
    }

    return content
}