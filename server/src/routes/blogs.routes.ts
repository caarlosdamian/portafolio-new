import { Router } from 'express';
import { getBlogsHandler } from '../controllers/blog.controllers';
import { protectedRouteMiddleware } from '../middleware/protectedRoute';

const router = Router();

router.get('/', getBlogsHandler);
// getBlogbyId
// Editblogbyid
// DeleteBlog
// Createblog/

export default router;
