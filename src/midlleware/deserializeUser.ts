import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import log from "../logger";
import { reIssueAccessToken } from "../service/session.service";
// import { reIssueAccessToken } from "../service/session.service";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log('called');

  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  // console.log(accessToken);

  const refreshToken = get(req, "headers.x-refresh");

  if (!accessToken) {
    //   console.log('here');
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken); //, "accessTokenPublicKey");
  //   console.log('decod',decoded);
  if (decoded) {
    // console.log(decoded);

    res.locals.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken });
    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
    }
    const result = verifyJwt(newAccessToken as string);
    res.locals.user = result.decoded;
    return next();
  }

  return next();
};

export default deserializeUser;
