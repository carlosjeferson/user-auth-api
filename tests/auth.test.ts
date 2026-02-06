import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Fluxo de Autenticação', () => {
  const testUser = {
    name: 'Test User',
    email: 'testlogin@example.com',
    password: 'password123'
  };

  // Antes de rodar os testes, limpamos o usuário de teste se ele existir
  beforeAll(async () => {
    const user = await prisma.user.findUnique({ where: { email: testUser.email } });
    if (user) {
      await prisma.user.delete({ where: { email: testUser.email } });
    }
    // Criamos o usuário via rota de POST (para testar o fluxo real)
    await request(app).post('/users').send(testUser);
  });

  it('Deve logar com sucesso e retornar um token JWT', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
    expect(response.body.user).toHaveProperty('email', testUser.email);
  });

  it('Não deve logar com senha incorreta', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: testUser.email,
        password: 'senha-errada'
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('error', 'Email ou senha inválidos');
  });
});