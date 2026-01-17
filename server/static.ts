import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  
  // Use a middleware to log if static files are being served correctly in production
  app.use(express.static(distPath, {
    maxAge: "1d",
    etag: true
  }));

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
