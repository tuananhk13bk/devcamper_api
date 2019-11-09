import { Request, Response, NextFunction } from "express";
import { Schema } from "@hapi/joi";
import HttpStatusCode from "types/HttpStatusCode";

const validationMiddlewareFactory = (schema: Schema) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    res
      .status(HttpStatusCode.InternalServerError)
      .json({ message: err.message });
  }
};

export default validationMiddlewareFactory;
