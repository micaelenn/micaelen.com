export const dynamic = "force-dynamic";

// internal dependencies
import HomepageLayout from "@/layouts/Homepage/Homepage";
import { defaultGETRequest } from "@/utils/helpers/fetch";
import { Endpoints } from "@/utils/config/endpoints";

export async function generateMetadata() {
  return {
    title: "Micaelen Miranda | Software Engineer",
    description:
      "Micaelen Miranda is a Software Engineer with 6 years of experience building and maintaining web applications, combining front-end and back-end expertise to deliver efficient, integrated solutions.",
  };
}

export default async function Home() {
  const homepageData = await defaultGETRequest(Endpoints.homepage);
  return <HomepageLayout data={homepageData.content} />;
}
