import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  userId: string;
  role: string;
}

export function authMiddleware(req: any, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token não informado' });
  }

  const [, token] = authHeader.split(' ');

  try {

    const secret = process.env.JWT_SECRET;

    if(!secret) {
      return res.status(500).json({ error: 'JWT_SECRET não foi configurada nas variáveis de ambiente'});
    }

    const decoded = jwt.verify(token, secret) as unknown as TokenPayload;
    
    req.userId = decoded.userId;
    req.userRole = decoded.role;

    return next();
  } catch {
    return res.status(401).json({ error: 'Token inválido' });
  }
}
