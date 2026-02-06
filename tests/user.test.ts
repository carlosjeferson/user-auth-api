import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('User CRUD Endpoints', () => {
  let createdUserId: string;
  const newUser = {
    name: 'CRUD User',
    email: 'crud@test.com',
    password: 'password123'
  };

  beforeAll(async () => {
    await prisma.user.deleteMany({ where: { email: newUser.email } });
  });

  it('Deve criar um usuário com sucesso', async () => {
    const res = await request(app).post('/users').send(newUser);
    expect(res.status).toBe(201);
    createdUserId = res.body.id;
  });

  it('Deve listar usuários com paginação (data e meta)', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body).toHaveProperty('meta');
  });

  it('Deve buscar um usuário específico por ID', async () => {
    const res = await request(app).get(`/users/${createdUserId}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(createdUserId);
  });

  it('Deve retornar 404 para ID inexistente', async () => {
    const fakeId = '60d21b4667d0d8992e610c85'; // Formato válido MongoDB
    const res = await request(app).get(`/users/${fakeId}`);
    expect(res.status).toBe(404);
  });
});