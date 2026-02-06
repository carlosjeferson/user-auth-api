import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/AppError.js';
export declare function errorMiddleware(error: Error | AppError | ZodError | any, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>>;
