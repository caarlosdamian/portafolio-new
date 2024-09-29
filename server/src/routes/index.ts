import express from 'express';
import healthCheckRouter from './healthCheck.routes';
import usersRouter from './users.routes';
import authRouter from './auth.routes';

const router = express.Router();

router.use('/health', healthCheckRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

export default router;
