import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'
import { formatDateToEnGB } from '@/utils/helpers/string'

// NOTE CONTENT
export const getNoteData = async (slug: string) => {
    return await client.fetch(
        `*[_type == "${schemas.notes}" && slug.current == '${slug}'][0] {
            title,
            slug,
            thumbnail,
            excerpt,
            content,
            topics,
            "createdAt": _createdAt,
        }`
    )
}