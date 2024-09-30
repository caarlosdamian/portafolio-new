import { Router } from 'express';
import passport from 'passport';
import { authHandler, authStatus } from '../controllers/auth.controller';

const router = Router();

router.post(
  '/',
  (req, _res, next) => {
    // console.log(req);
    next();
  },
  passport.authenticate('local'),
  authHandler
);
router.get('/status', authStatus);
router.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.json('Se deslogweo');
  });
});

export default router;
