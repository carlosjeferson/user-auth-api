import { Response, NextFunction } from 'express';
export declare function authMiddleware(req: any, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
