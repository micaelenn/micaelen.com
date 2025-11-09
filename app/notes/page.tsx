export const dynamic = 'force-dynamic'

// internal dependencies
import NotesLayout from "@/layouts/Notes/Notes";
import { getSeo, getNotesData } from "@/lib/sanity/notes";

export async function generateMetadata() {
  // const seo = await getSeo()

  return {
    title: 'notes',
    description: 'Teste'
  }
}

export default async function Notes() {
  const notesData = await getNotesData()

  return (
    <NotesLayout data={notesData} />
  )
}