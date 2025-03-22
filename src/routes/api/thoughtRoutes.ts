import { Router } from 'express';
const router = Router();
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
  addReaction,
  updateThought,
  deleteReaction,
} from '../../controllers/thoughtController.js';


router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId')
.get(getThoughtById)
.delete(deleteThought)
.put(updateThought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

export { router as thoughtRouter };
