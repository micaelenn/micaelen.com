// external dependencies
import { getNoteData } from '@/lib/sanity/note'
import NoteLayout from '@/layouts/Note/Note'
import { getNoteSeo } from '@/lib/sanity/notes'

export async function generateMetadata() {  
  const seo = await getNoteSeo()

  return {
    title: `${seo.title} | Micaelen Miranda`,
    description: seo.excerpt,
  }
}

export default async function Note({ params }: { params: { slug: string } }) {
  const noteData = await getNoteData(params.slug)
  return <NoteLayout data={noteData} />
}
