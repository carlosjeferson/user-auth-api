import { Request, Response } from 'express';
import { createUserService, getUsersService, updateUserService, deleteUserService, getUserService, getMeService} from '../services/userService.js';
import { createUserSchema, updateUserSchema } from '../validations/userValidation.js';

export async function createUser(req: Request, res: Response) {
  const data = createUserSchema.parse(req.body);
  const user = await createUserService(data);
  res.status(201).json(user);
}

export async function getUser(req: Request, res: Response) {
  const user = await getUserService(req.params.id as string);
  return res.status(200).json(user);
}

export async function getUsers(req: Request, res: Response) {
  const users = await getUsersService(req.query);
  return res.status(200).json(users);
}

export async function updateUser(req: Request, res: Response) {
  const data = updateUserSchema.parse(req.body);
  const user = await updateUserService(req.params.id as string, data);
  return res.status(200).json(user);
}


export async function deleteUser(req: Request, res: Response) {
  await deleteUserService(req.params.id as string);
  return res.status(200).json({ message: 'Usuário foi deletado com sucesso' });
}

export async function getMeUser(req: any, res: Response) {
  const user = await getMeService(req.userId);
  return res.status(200).json(user);
}

