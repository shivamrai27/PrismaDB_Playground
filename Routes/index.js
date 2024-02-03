import { Router } from 'express';
const router = Router();

import UserRoutes from './userRoutes.js'
import PostRoutes from './postRoutes.js'
import commentRoutes from './commentRoutes.js'

// * User route
router.use('/api/user', UserRoutes)

// * post route
router.use('/api/post', PostRoutes)

// * comment route
router.use('/api/comment', commentRoutes)

export default router; 