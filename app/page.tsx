export const dynamic = 'force-dynamic'

// internal dependencies
import HomepageLayout from "@/layouts/Homepage/Homepage";
import { getSeo, getHomepageData } from "@/lib/sanity/homepage";

export async function generateMetadata() {
  const seo = await getSeo()

  return {
    title: seo.homepage.title,
    description: seo.homepage.description
  }
}

export default async function Home() {
  const homepageData = await getHomepageData()

  return (
    <HomepageLayout {...homepageData} />
  )
}
