import config from "config";
import { Request, Response } from "express";
import {
  createSession,
  getSessions,
  updateSessions,
} from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);
  if (!user) {
    return res.status(401).send("Invalid Credential");
  }
  const sessions = await createSession(user._id, req.get("user-agent") || "");
  const accessToken = signJwt(
    { ...user, session: sessions._id },
    { expiresIn: config.get("accessTokenTtl") }
  );
  const refreshToken = signJwt(
    { ...user, session: sessions._id },
    { expiresIn: config.get("refreshTokenTtl") }
  );
  return res.send({ accessToken, refreshToken });
}
export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const sessions = await getSessions({ user: userId, valid: true });
  return res.send(sessions);
}
export async function deleteSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session;
  // console.log(res.locals.user.session);

  await updateSessions({ _id: sessionId }, { valid: false });
  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}
