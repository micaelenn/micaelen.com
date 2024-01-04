export const dynamic = 'force-dynamic'

// internal dependencies
import PostLayout from "@/layouts/Post/Post";
import { getTodayILearnedContent } from "@/lib/sanity/today-i-learned";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = await getTodayILearnedContent(params.slug)

  return {
    title: data.seo.title,
    description: data.seo.description
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const content = await getTodayILearnedContent(params.slug)
  
  return (
    <PostLayout {...content} />
  )
}