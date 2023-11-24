import { client } from '@/utils/config/client'
import imageUrlBuilder from '@sanity/image-url'

const builder: any = imageUrlBuilder(client)

export const getImageURL = (source: object) => {
    return builder.image(source)
}