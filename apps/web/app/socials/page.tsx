export const dynamic = "force-dynamic";

// internal dependencies
import SocialsLayout from "@/layouts/Socials/Socials";
import { defaultGETRequest } from "@/utils/helpers/fetch";
import { Endpoints } from "@/utils/config/endpoints";

export async function generateMetadata() {
  return {
    title: "Socials | Micaelen Miranda",
    description: "",
  };
}

export default async function Socials() {
  const socialsData = await defaultGETRequest(Endpoints.socials);
  return <SocialsLayout data={socialsData.content} />;
}
