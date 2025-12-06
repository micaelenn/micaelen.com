export const dynamic = 'force-dynamic'

// internal dependencies
import NotesLayout from "@/layouts/Notes/Notes";
import { getNotesData } from "@/lib/sanity/notes";

export async function generateMetadata() {
  return {
    title: 'Notes | Micaelen Miranda',
    description: ''
  }
}

export default async function Notes() {
  const notesData = await getNotesData()

  return (
    <NotesLayout data={notesData} />
  )
}