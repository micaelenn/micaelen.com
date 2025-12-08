import { client } from "@/config/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);

export const getImageURL = (source: object) => {
  return builder.image(source).url();
};
