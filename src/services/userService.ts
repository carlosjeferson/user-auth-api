import { PrismaClient, Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';
import { AppError } from '../errors/AppError.js';
import { isValidObjectId } from '../utils/isValidObjectId.js';

const prisma = new PrismaClient();

export async function createUserService({ email, name, password }: Prisma.UserCreateInput) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword
    },
    select: {
      id: true,
      email: true,
      name: true
    }
  });

  return user;
}

export async function getUserService(id: string) {
  if (!isValidObjectId(id)) {
    throw new AppError('ID inválido', 400);
  }

  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true
    }
  });

  if (!user) {
    throw new AppError('Usuário não encontrado', 404);
  }

  return user;
}

interface GetUsersQuery {
  page?: string | number;
  limit?: string | number;
  order?: string;
  sort?: 'asc' | 'desc';
  email?: string;
  name?: string;
}

export async function getUsersService(query: GetUsersQuery) {
  const {
    page = 1,
    limit = 10,
    order = 'createdAt',
    sort = 'asc',
    email,
    name
  } = query;

  const skip = (Number(page) - 1) * Number(limit);

  // 💡 Tipagem oficial do Prisma para o WHERE
  const where: Prisma.UserWhereInput = {};

  if (email) {
    where.email = {
      contains: email,
      mode: 'insensitive'
    };
  }

  if (name) {
    where.name = {
      contains: name,
      mode: 'insensitive'
    };
  }

  const users = await prisma.user.findMany({
    where,
    skip,
    take: Number(limit),
    orderBy: {
      [order]: sort
    },
    select: {
      id: true,
      email: true,
      name: true
    }
  });

  const total = await prisma.user.count({ where });

  return {
    data: users,
    meta: {
      page: Number(page),
      limit: Number(limit),
      total
    }
  };
}

export async function getMeService(userId: string) {
  if (!isValidObjectId(userId)) {
    throw new AppError('ID inválido', 400);
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true
    }
  });

  if (!user) {
    throw new AppError('Usuário não encontrado', 404);
  }

  return user;
}

export async function updateUserService(id: string, data: Prisma.UserUpdateInput) {
  if (!isValidObjectId(id)) {
    throw new AppError('ID inválido', 400);
  }

  const userExists = await prisma.user.findUnique({
    where: { id }
  });

  if (!userExists) {
    throw new AppError('Usuário não encontrado', 404);
  }
  const updatedData: Prisma.UserUpdateInput = { ...data };

  if (data.password && typeof data.password === 'string') {
    updatedData.password = await bcrypt.hash(data.password, 10);
  }

  return prisma.user.update({
    where: { id },
    data: updatedData,
    select: {
      id: true,
      name: true,
      email: true
    }
  });
}

export async function deleteUserService(id: string) {
  if (!isValidObjectId(id)) {
    throw new AppError('ID inválido', 400);
  }

  const userExists = await prisma.user.findUnique({
    where: { id }
  });

  if (!userExists) {
    throw new AppError('Usuário não encontrado', 404);
  }

  await prisma.user.delete({
    where: { id }
  });
}