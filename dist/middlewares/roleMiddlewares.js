export function adminOnly(req, res, next) {
    if (req.userRole !== 'ADMIN') {
        return res.status(403).json({
            error: 'Acesso negado. Apenas administradores.'
        });
    }
    next();
}
//# sourceMappingURL=roleMiddlewares.js.map