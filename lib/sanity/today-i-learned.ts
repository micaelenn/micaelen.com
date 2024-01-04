import { client } from '@/utils/config/client'
import { schemas } from '@/utils/config/schemas'


// TIL - PAGE CONTENT
export const getTodayILearnedPage = async () => {
    const posts = await getTodayILearnedPosts()
    
    const data = await client.fetch(
        `*[_type == "${schemas.tilPage}"][0]`
    )

    const pageData = {
        seo: data.seo,
        content: {
            introduction: data.content,
            posts: posts
        }
    }

    return pageData
}

// TIL - POST CONTENT
export const getTodayILearnedContent = async (slug: string) => {
    const data = await client.fetch(
        `*[_type=="${schemas.til}" && slug.current == '${slug}'][0] {
            title,
            content,
            seo
        }`
    )

    const post = {
        seo: data.seo,
        content: {
            title: data.title,
            info: data.content
        }
    }

    return post
}

// TIL - POSTS
export const getTodayILearnedPosts = async () => {
    const posts = await client.fetch(
        `*[_type=="${schemas.til}"] {
            seo,
            title,
            slug,
            subject,
            content,
            _createdAt
        }`
    )

    return posts
}