import { Request, Response } from "express";
import { omit } from "lodash";
import { createuser } from "../service/user.service";
import log from "../logger";
export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createuser(req.body);
    return res.send(user);
  } catch (error: any) {
    // log.error(error)
    return res.status(409).send(error.message);
  }
}
