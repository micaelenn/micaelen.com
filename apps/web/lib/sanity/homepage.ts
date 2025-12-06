import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'

// HOMEPAGE CONTENT
export const getHomepageData = async () => {   
  return await client.fetch(
    `*[_type=="${schemas.homepage}"][0] {
      title,
      stack,
      description,
      seo
    }` 
  )
}