import { Router } from 'express';
import { getHealthCheckHandler, getPongHandler } from '../controllers/healthCheck.controller';

const router = Router();

router.get('/', getHealthCheckHandler);
router.get('/ping', getPongHandler);

export default router;
