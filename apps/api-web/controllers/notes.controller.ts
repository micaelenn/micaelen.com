// modules
import { Request, Response, Router } from "express";
import { setEndpoint } from "configs/application";
import { tryCatch } from "@/utils/helpers/tryCatch";

// mappings
import { sanity } from "@/mappings/sanity/sanity.mapping";

export const notes = Router();

// GET
notes.get(
  setEndpoint("notes"),
  tryCatch(async (req: Request, res: Response) => {
    const content = await sanity.getNotesData();
    res.status(200).json(content);
  })
);

notes.get(
  setEndpoint("notes/:slug"),
  tryCatch(async (req: Request, res: Response) => {
    const { slug } = req.params;
    const content = await sanity.getNoteData(slug);
    res.status(200).json(content);
  })
);
