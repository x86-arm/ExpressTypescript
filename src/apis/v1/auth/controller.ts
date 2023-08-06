import { NextFunction, Request, Response } from "express";

import { ApiResponse } from "utils/apiResponse";
import * as service from "./service";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const result = await service.login(req, next);
  if (result) new ApiResponse(result, "OK", 200, req.startTime).send(res);
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const result = await service.register(req, next);
  if (result) new ApiResponse(result, "OK", 200, req.startTime).send(res);
};

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const result = await service.refreshToken(req, next);
  if (result) new ApiResponse(result, "OK", 200, req.startTime).send(res);
};
