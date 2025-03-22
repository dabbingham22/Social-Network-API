import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
} from '../../controllers/userController.js';


router.route('/')
.get(getAllUsers)
.post(createUser)
;

router.route('/:userId')
.get(getUserById)
.put(updateUser)
;

export { router as userRouter };