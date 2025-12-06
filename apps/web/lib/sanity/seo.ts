import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'

// SEO
export const getSeo = async (schemaLocation: keyof typeof schemas) => {
  return await client.fetch(
    `*[_type == "${schemas[schemaLocation]}"][0].seo`
  )
}

export const getNoteSeo = async (schemaLocation: keyof typeof schemas, slug: string) => {
  return await client.fetch(
    `*[_type == "${schemas[schemaLocation]}" && slug.current == '${slug}][0].seo`
  )
}