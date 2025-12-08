// modules
import { Request, Response, Router } from "express";
import { setEndpoint } from "configs/application";
import { tryCatch } from "@/utils/helpers/tryCatch";

// mappings
import { sanity } from "@/mappings/sanity/sanity.mapping";

export const homepage = Router();

// GET
homepage.get(
  setEndpoint("homepage"),
  tryCatch(async (req: Request, res: Response) => {
    const content = await sanity.getHomepageData();
    res.status(200).json(content);
  })
);
