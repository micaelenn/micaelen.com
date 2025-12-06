import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'

// SOCIALS CONTENT
export const getSocialsData = async () => {
  return await client.fetch(
    `*[_type == "${schemas.socials}"][0] {
      title,
      socialMedias
    }`
  )
}