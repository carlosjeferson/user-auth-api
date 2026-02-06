import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser, getUser, getMeUser } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddlewares.js';
const router = Router();
router.post('/', createUser);
router.get('/', getUsers);
router.get('/me', authMiddleware, getMeUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;
//# sourceMappingURL=userRoutes.js.map