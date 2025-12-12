import { client } from "@/configs/client";
import { schemas } from "@/utils/helpers/schemas";
import { formatDateToEnGB } from "@/utils/helpers/string";
import { getImageURL } from "@/utils/helpers/assets";
import { PostProps } from "@/utils/types/PostProps";

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
				seo {
					title
				}
			}`
    );
  };

  getAboutData = async () => {
    return await client.fetch(
      `*[_type == "${schemas.about}"][0] {
					title,
					description
       }`
    );
  };

  getNotesData = async () => {
    const query = await client.fetch(
      `*[_type == "${schemas.notes}"] {
        title,
        slug,
        excerpt,
        topics,
        _createdAt,
      }`
    );

    const posts = query.map((post: PostProps) => ({
      title: post.title,
      slug: `/notes/${post.slug?.current ?? ""}`,
      excerpt: post.excerpt,
      topics: post.topics,
      createdAt: formatDateToEnGB(post._createdAt),
    }));

    return posts;
  };

  getNoteData = async (slug: string) => {
    const query = await client.fetch(
      `*[_type == "${schemas.notes}" && slug.current == '${slug}'][0] {
				title,
				slug,
				thumbnail,
				excerpt,
				content,
				_createdAt,
			}`
    );

    return {
      title: query.title,
      slug: `/notes/${query.slug?.current ?? ""}`,
      thumbnail: getImageURL(query.thumbnail),
      excerpt: query.excerpt,
      createdAt: formatDateToEnGB(query._createdAt),
      content: query.content,
    };
  };

  getSocialsData = async () => {
    return await client.fetch(
      `*[_type == "${schemas.socials}"][0] {
				title,
				socialMedias[] {
					icon,
					name,
					url
				}
			}`
    );
  };
}

export const sanity = new SanityMapping();
