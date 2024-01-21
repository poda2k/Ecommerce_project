import { NextFunction, Request, Response } from "express";
import Error from '../interfaces/errorInterface';
import jwt from "jsonwebtoken";


const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || "Whoops!! something went wrong";
  res.status(status).json({ status, message });
};

const handleUnauthorizedError = (next: NextFunction) => {
  const error: Error = new Error("Login Error, Please login again");

  error.status = 401;
  next(error);
};

const validateTokenMiddleware = (
  req: any,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.get("Authorization");
    if (authHeader) {
      const bearer = authHeader.split(" ")[0].toLowerCase();
      const token = authHeader.split(" ")[1];
      if (token && bearer === "bearer") {
        const decode: any = jwt.verify(
          token,
          "mysecrettoken" as unknown as string
        );

        if (decode) {
          req["user"] = decode.id;
          next();
        } else {
          // Failed to authenticate user.
          handleUnauthorizedError(next);
        }
      } else {
        // token type not bearer
        handleUnauthorizedError(next);
      }
    } else {
      // No Token Provided.
      handleUnauthorizedError(next);
    }
  } catch (err) {
    handleUnauthorizedError(next);
  }
};

export default validateTokenMiddleware;
