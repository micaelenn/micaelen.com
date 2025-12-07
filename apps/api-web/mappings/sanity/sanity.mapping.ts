import { client } from "@/config/client";
import { schemas } from "@/utils/helpers/schemas";

class SanityMapping {
  async getMetadata() {
    return await client.fetch(
      `*[_type == "${schemas.general}"][0] {
				title,
				updates,
				 menu[]{
					icon,
					name,
					url
				}
      }`
    );
  }

  getHomepageData = async () => {
    return await client.fetch(
      `*[_type=="${schemas.homepage}"][0] {
				title,
				stack,
				description,
				seo
			}`
    );
  };

  getNotesData = async () => {
    return await client.fetch(
      `*[_type == "${schemas.notes}"] {
				title,
				thumbnail,
				excerpt,
				content,
				topics,
				"slug": "/notes/" + slug.current,
				"createdAt": _createdAt,
			}`
    );
  };

  getNoteData = async (slug: string) => {
    return await client.fetch(
      `*[_type == "${schemas.notes}" && slug.current == '${slug}'][0] {
				title,
				slug,
				thumbnail,
				excerpt,
				content,
				topics,
				"createdAt": _createdAt,
			}`
    );
  };

  getSocialsData = async () => {
    return await client.fetch(
      `*[_type == "${schemas.socials}"][0] {
				title,
				socialMedias
			}`
    );
  };
}

export const sanity = new SanityMapping();
