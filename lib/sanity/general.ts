import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'
import { getTrackInformation } from '@/lib/spotify'
import { getMediaInformation } from '@/lib/tracktv'

// GENERAL CONTENT
export const getGeneralData = async () => {        
    const content = {
        updates: await getUpdates(),
        social: await getSocialMedias()
    }

    return content
}

// UPDATES
export const getUpdates = async () => {
    // static updates
    const query = await client.fetch(`*[_type=="${schemas.general}"][0] {
        learning, 
        location,
        playing,
    }`, { next: { revalidate: 10} })

    // dynamic updates
    const listening = await getTrackInformation()
    const watchedMovie = await getMediaInformation('movies')
    const watching = await getMediaInformation('shows')

    const updates = {
        listening : listening,
        learning: query.learning,
        watching: watching,
        location: query.location,
        watchedMovie: watchedMovie,
        playing: query.playing    
    }

    return updates
}

// SOCIAL MEDIAS
export const getSocialMedias = async () => {
    const social = await client.fetch(`*[_type=="${schemas.general}"][0] {
        socialMedias
    }`, { next: { revalidate: 10 } })

    return social
}