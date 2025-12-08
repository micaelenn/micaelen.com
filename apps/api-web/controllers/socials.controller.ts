// modules
import { Request, Response, Router } from "express";
import { setEndpoint } from "configs/application";
import { tryCatch } from "@/utils/helpers/tryCatch";

// mappings
import { sanity } from "@/mappings/sanity/sanity.mapping";

export const socials = Router();

// GET
socials.get(
  setEndpoint("socials"),
  tryCatch(async (req: Request, res: Response) => {
    const content = await sanity.getSocialsData();
    res.status(200).json(content);
  })
);
