export const dynamic = "force-dynamic";

// internal dependencies
import AboutLayout from "@/layouts/About/About";
import { defaultGETRequest } from "@/utils/helpers/fetch";
import { Endpoints } from "@/utils/config/endpoints";

export async function generateMetadata() {
  return {
    title: "About | Micaelen Miranda",
    description: "",
  };
}

export default async function About() {
  const aboutData = await defaultGETRequest(Endpoints.about);
  return <AboutLayout data={aboutData.content} />;
}
