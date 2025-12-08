export const dynamic = "force-dynamic";

// internal dependencies
import NotesLayout from "@/layouts/Notes/Notes";
import { defaultGETRequest } from "@/utils/helpers/fetch";
import { Endpoints } from "@/utils/config/endpoints";

export async function generateMetadata() {
  return {
    title: "Notes | Micaelen Miranda",
    description: "",
  };
}

export default async function Notes() {
  const notesData = await defaultGETRequest(Endpoints.notes);
  return <NotesLayout data={notesData.content} />;
}
