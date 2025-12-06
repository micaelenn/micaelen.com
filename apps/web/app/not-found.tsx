

// internal dependencies
import NotFoundLayout from "@/layouts/404/404";

export async function generateMetadata() {
  return {
    title: 'Page Not Found | Micaelen Miranda',
    description: ''
  }
}

export default async function NotFound() {
  const content = {
    image: '/psyduck.gif',
    title: "Page Not Found"
  }
  
  return (
    <NotFoundLayout data={content} />
  )
}