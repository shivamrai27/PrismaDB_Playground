import { Router } from 'express';
import { createUser } from '../Controllers/userController.js';

const router = Router();

router.post('/', createUser);

export default router;