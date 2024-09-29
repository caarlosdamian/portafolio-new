import { Router } from 'express';
import { createUserHandler, getUsersHandler } from '../controllers/users.controller';

const router = Router();

router.post('/create', createUserHandler);
router.get('/', getUsersHandler);

export default router;
