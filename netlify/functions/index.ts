import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../../server/routes";
import { serveStatic } from "../../server/static";
import { createServer } from "http";
import serverless from "serverless-http";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }
})();

export const handler = serverless(app);
