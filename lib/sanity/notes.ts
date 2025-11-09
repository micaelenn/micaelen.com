import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'
import  { formatNotesData } from '@/utils/helpers/mappings'

// NOTES CONTENT
export const getNotesData = async () => {
    const notes = await client.fetch(
       `*[_type == "${schemas.notes}"]`
    )

    return formatNotesData(notes)
}

// SEO
export const getSeo = async () => {
    /* const notesSeo = client.fetch(
        `*[_type=="${schemas.}"][0]`
    ) */

    // return notesSeo
}