import { Router } from 'express';
const router = Router();

import UserRoutes from './userRoutes.js'
import PostRoutes from './postRoutes.js'

// * User route
router.use('/api/user', UserRoutes)

// * post route
router.use('/api/post', PostRoutes)

// * comment route
export default router; 