export const dynamic = 'force-dynamic'

// internal dependencies
import SocialsLayout from "@/layouts/Socials/Socials"
import { getSocialsData } from "@/lib/sanity/socials"

export async function generateMetadata() {
  return {
    title: 'Socials | Micaelen Miranda',
    description: ''
  }
}

export default async function Socials() {
  const socialsData = await getSocialsData()

  return (
    <SocialsLayout data={socialsData} />
  )
}