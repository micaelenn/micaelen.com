import { createClient } from "@sanity/client";
import { App } from "./application";

const { sanityProjectdID, sanityDataset } = App.variables
const projectId = sanityProjectdID;
const dataset = sanityDataset;
const apiVersion = "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
