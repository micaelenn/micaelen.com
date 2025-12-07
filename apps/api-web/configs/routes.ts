// External modules
import express from "express";
import cors from "cors";

export const app = express();

// Internal modules
import { metadata } from "@/controllers/metadata.controller";

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("", metadata);
