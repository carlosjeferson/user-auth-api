import { Request, Response, NextFunction } from "express";

export function adminOnly(req: any, res: Response, next: NextFunction) {
  if (req.userRole !== 'ADMIN') {
    return res.status(403).json({
      error: 'Acesso negado. Apenas administradores.'
    });
  }

  next();
}
