import { Application } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../swagger";

export function setupSwagger(app: Application) {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
  );

  console.log("📘 Swagger disponível em /docs");
}
