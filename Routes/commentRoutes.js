import { Router } from 'express';
import { createComment, deleteComment, fetchComment, fetchComments, updateComment } from '../Controllers/commentController.js';

const router = Router();

router.get('/', fetchComments);
router.get('/:id', fetchComment);
router.post('/', createComment);
// router.put('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;