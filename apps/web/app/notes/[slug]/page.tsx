// external dependencies
import NoteLayout from "@/layouts/Note/Note";
import { defaultGETRequest } from "@/utils/helpers/fetch";
import { Endpoints } from "@/utils/config/endpoints";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const noteEndpoint = `${Endpoints.notes}/${params.slug}`;
  const noteData = await defaultGETRequest(noteEndpoint);

  return {
    title: `${noteData.content.title} | Micaelen Miranda`,
    description: noteData.content.excerpt,
  };
}

export default async function Note({ params }: { params: { slug: string } }) {
  const noteEndpoint = `${Endpoints.notes}/${params.slug}`;
  const noteData = await defaultGETRequest(noteEndpoint);
  return <NoteLayout data={noteData.content} />;
}
