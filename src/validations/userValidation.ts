import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.email('Email inválido'),
  password: z.string().min(8, 'Senha muito curta'),
  role: z.enum(['USER', 'ADMIN']).optional()
});

export const updateUserSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.email().optional(),
  password: z.string().min(8, 'Senha muito curta').optional()
});
