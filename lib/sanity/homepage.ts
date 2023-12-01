import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'

// HOMEPAGE CONTENT
export const getHomepageData = () => {    
    const homepageData = client.fetch(
        `*[_type=="${schemas.homepage}"][0] {
            introduction
        }`
    )
    return homepageData
}

// SEO
export const getSeo = () => {
    const homepageSeo = client.fetch(
        `*[_type=="${schemas.homepage}"][0] {
            homepage
        }`
    )
    return homepageSeo
}
