import { Router } from 'express';
const router = Router();

import UserRoutes from './userRoutes.js'

router.use('/api/createUser', UserRoutes)
export default router;