import { createClient } from "@sanity/client";
import { App } from "./application";

const projectId = App.sanityProjectdID;
const dataset = App.sanityDataset;
const apiVersion = "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
