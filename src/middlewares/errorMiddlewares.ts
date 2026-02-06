import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/AppError.js';

export function errorMiddleware(
  error: Error | AppError | ZodError | any, 
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  if (error instanceof ZodError) {
    return res.status(400).json({
      error: 'Erro de validação',
      details: error.issues.map(err => ({
        field: err.path[0],
        message: err.message
      }))
    });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: error.message
    });
  }

  if (error.statusCode) {
    return res.status(error.statusCode).json({
      error: error.message
    });
  }

  console.error(error);

  return res.status(500).json({
    error: 'Erro interno do servidor'
  });
}