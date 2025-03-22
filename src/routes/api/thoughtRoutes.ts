import { Router } from 'express';
const router = Router();
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
} from '../../controllers/thoughtController.js';


router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId')
.get(getThoughtById)
.delete(deleteThought);

export { router as thoughtRouter };
