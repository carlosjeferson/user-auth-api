import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/AppError.js';
const prisma = new PrismaClient();
export async function loginService(email, password) {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (!user) {
        throw new AppError('Email ou senha inválidos', 401);
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new AppError('Email ou senha inválidos', 401);
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new AppError('JWT_SECRET não foi configurada nas variáveis de ambiente');
    }
    const token = jwt.sign({
        userId: user.id,
        role: user.role
    }, secret, { expiresIn: '1h' });
    return {
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    };
}
//# sourceMappingURL=authService.js.map