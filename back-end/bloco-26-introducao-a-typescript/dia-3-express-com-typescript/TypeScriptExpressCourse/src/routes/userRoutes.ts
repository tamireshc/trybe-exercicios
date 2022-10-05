import { Router } from 'express';
import userController from '../controllers/usercontroller'
import createUserMiddleware from '../middlewares/validateCreateUser'

const router = Router();

router.get('/', userController.getAllUsers );
router.get('/:id', userController.getUser );
router.post('/',createUserMiddleware.createUserMiddleware, userController.createUser );
router.put('/:id',createUserMiddleware.createUserMiddleware, userController.updateUser );
router.delete('/:id', userController.deleteUser );

export default router;