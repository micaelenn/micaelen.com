// External modules
import express from "express";
import cors from "cors";

export const app = express();

// Internal modules
import { notes } from "@/controllers/notes.controller";
import { socials } from "@/controllers/socials.controller";
import { metadata } from "@/controllers/metadata.controller";
import { homepage } from "@/controllers/homepage.controller";
import { about } from "@/controllers/about.controller";

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("", notes);
app.use("", socials);
app.use("", metadata);
app.use("", homepage);
app.use("", about);
