import { Router } from 'express';
import passport from 'passport';
import {
  authHandler,
  authLogoutHandler,
  authStatusHandler,
} from '../controllers/auth.controller';

const router = Router();

router.post('/', passport.authenticate('local'), authHandler);
router.get('/status', authStatusHandler);
router.post('/logout', authLogoutHandler);

export default router;
