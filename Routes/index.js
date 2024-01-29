import { Router } from 'express';
const router = Router();

import UserRoutes from './userRoutes.js'

// * User route
router.use('/api/user', UserRoutes)

// * post route


// * comment route
export default router;