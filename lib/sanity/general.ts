import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'

// GENERAL CONTENT
export const getGeneralData = async () => {
    const response = await fetch(`${process.env.PUBLIC_URL}/api/updates`, { cache: 'no-store' });
    const updates = await response.json()
    
    const social = await client.fetch(`*[_type=="${schemas.general}"][0] {
        socialMedias
    }`)

    const content = {
        updates: updates,
        social: social
    }

    return content
}

// UPDATES
export const getStaticUpdates = async () => {
    const query = await client.fetch(`*[_type=="${schemas.general}"][0] {
        learning, 
        location,
        playing, 
    }`)

    const staticUpdates = {
        learning: query.learning,
        location: query.location,
        playing: query.playing
    }

    return staticUpdates
}