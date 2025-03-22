import { Router } from 'express';
const router = Router();
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, } from '../../controllers/userController.js';
router.route('/')
    .get(getAllUsers)
    .post(createUser);
router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);
export { router as userRouter };
