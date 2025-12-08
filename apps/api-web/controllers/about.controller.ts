// modules
import { Request, Response, Router } from "express";
import { setEndpoint } from "configs/application";
import { tryCatch } from "@/utils/helpers/tryCatch";

// mappings
import { sanity } from "@/mappings/sanity/sanity.mapping";

export const about = Router();

// GET
about.get(
  setEndpoint("about"),
  tryCatch(async (req: Request, res: Response) => {
    const content = await sanity.getAboutData();
    res.status(200).json(content);
  })
);
