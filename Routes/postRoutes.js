import { Router } from 'express';
import { } from '../Controllers/userController.js';
import { createPost, deletePost, fetchPost, fetchPosts, searchPost, updatePost } from '../Controllers/PostController.js';

const router = Router();

router.get('/', fetchPosts);
router.get('/search', searchPost);
router.get('/:id', fetchPost);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;