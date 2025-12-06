import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'

// NOTES CONTENT
export const getNotesData = async () => {
  return await client.fetch(
    `*[_type == "${schemas.notes}"] {
      title,
      thumbnail,
      excerpt,
      content,
      topics,
      "slug": "/notes/" + slug.current,
      "createdAt": _createdAt,
    }`
  )
}

export const getNoteSeo = async () => {
  return await client.fetch(
    `*[_type == "${schemas.notes}"][0] {
      title,
      excerpt,
    }`
  )
}