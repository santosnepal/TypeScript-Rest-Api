import { Express, Request, Response } from "express";
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from "./controller/session.controller";
import {
  createProductHandler,
  getProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from "./controller/product.controller";
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "./schema/product.schema";
import { createUserHandler } from "./controller/user.controller";
import deserializeUser from "./midlleware/deserializeUser";
import requireUser from "./midlleware/requireUser";
import validateRequest from "./midlleware/validateRequest.middleware";
import { createSessionSchema } from "./schema/session.schema";
import { createUserSchema } from "./schema/user.schema";
export default function (app: Express) {
  app.get("/check", (req: Request, res: Response) => {
    res.status(200).json({ message: "The routed got successfully" });
  });
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
  app.post(
    "/api/sessions",
    validateRequest(createSessionSchema),
    createUserSessionHandler
  );
  app.get(
    "/api/sessions",
    deserializeUser,
    requireUser,
    getUserSessionsHandler
  );
  app.delete(
    "/api/sessions",
    deserializeUser,
    requireUser,
    deleteSessionHandler
  );
  app.post(
    "/api/products",
    [deserializeUser, requireUser, validateRequest(createProductSchema)],
    createProductHandler
  );

  app.put(
    "/api/products/:productId",
    deserializeUser,
    requireUser,
    validateRequest(updateProductSchema),
    updateProductHandler
  );

  app.get(
    "/api/products/:productId",
    validateRequest(getProductSchema),
    getProductHandler
  );

  app.delete(
    "/api/products/:productId",
    [deserializeUser, requireUser, validateRequest(deleteProductSchema)],
    deleteProductHandler
  );
}
