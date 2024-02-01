import { Router } from 'express';
import { createUser, deleteUser, fetchUser, fetchUsers, updateUser } from '../Controllers/userController.js';

const router = Router();

router.get('/', fetchUsers);
router.get('/:id', fetchUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;