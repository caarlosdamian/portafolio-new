import express from 'express';
import healthCheckRouter from './healthCheck.routes';
import usersRouter from './users.routes';
import authRouter from './auth.routes';
import blogsRouter from './blogs.routes';
import { protectedRouteMiddleware } from '../middleware/protectedRoute';

const router = express.Router();

router.use('/api/health', healthCheckRouter);
router.use('/api/users', usersRouter);
router.use('/api/auth', authRouter);
router.use('/api/blogs', protectedRouteMiddleware, blogsRouter);

export default router;
