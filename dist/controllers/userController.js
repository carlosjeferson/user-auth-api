import { createUserService, getUsersService, updateUserService, deleteUserService, getUserService, getMeService } from '../services/userService.js';
import { createUserSchema, updateUserSchema } from '../validations/userValidation.js';
export async function createUser(req, res) {
    const data = createUserSchema.parse(req.body);
    const user = await createUserService(data);
    res.status(201).json(user);
}
export async function getUser(req, res) {
    const user = await getUserService(req.params.id);
    return res.status(200).json(user);
}
export async function getUsers(req, res) {
    const users = await getUsersService(req.query);
    return res.status(200).json(users);
}
export async function updateUser(req, res) {
    const data = updateUserSchema.parse(req.body);
    const user = await updateUserService(req.params.id, data);
    return res.status(200).json(user);
}
export async function deleteUser(req, res) {
    await deleteUserService(req.params.id);
    return res.status(200).json({ message: 'Usuário foi deletado com sucesso' });
}
export async function getMeUser(req, res) {
    const user = await getMeService(req.userId);
    return res.status(200).json(user);
}
//# sourceMappingURL=userController.js.map