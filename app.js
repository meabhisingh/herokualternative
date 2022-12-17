import express from "express";
import dotenv from "dotenv";

export const app = express();

dotenv.config({
  path: "./data/config.env",
});
