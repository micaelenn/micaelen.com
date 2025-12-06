export const dynamic = 'force-dynamic'

// internal dependencies
import AboutLayout from "@/layouts/About/About";
import { getAboutData } from "@/lib/sanity/about";

export async function generateMetadata() {
  return {
    title: 'About | Micaelen Miranda',
    description: ''
  }
}

export default async function About() {
  const aboutData = await getAboutData()

  return (
    <AboutLayout data={aboutData} />
  )
}