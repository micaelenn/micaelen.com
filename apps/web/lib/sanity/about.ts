import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'

// ABOUT CONTENT
export const getAboutData = async () => {
    return await client.fetch(
       `*[_type == "${schemas.about}"][0] {
            title,
            description,
            projects
       }`
    )
}