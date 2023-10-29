// internal dependencies
import HomepageLayout from "@/layouts/Homepage/Homepage";

export default async function Home() {
  // GET ACTIVITIES UPDATE
  const response = await fetch(`${process.env.PUBLIC_URL}/api/updates`, {
    cache: 'no-store'
  });
  const updates = await response.json()
  
  return (
    <HomepageLayout headerContent={updates}/>
  )
}
