import jwt from 'jsonwebtoken';
export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Token não informado' });
    }
    const [, token] = authHeader.split(' ');
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).json({ error: 'JWT_SECRET não foi configurada nas variáveis de ambiente' });
        }
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        req.userRole = decoded.role;
        return next();
    }
    catch {
        return res.status(401).json({ error: 'Token inválido' });
    }
}
//# sourceMappingURL=authMiddlewares.js.map