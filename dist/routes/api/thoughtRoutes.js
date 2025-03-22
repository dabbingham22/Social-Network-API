import { Router } from 'express';
const router = Router();
import { getAllThoughts, getThoughtById, createThought, deleteThought, addReaction, } from '../../controllers/thoughtController.js';
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId')
    .get(getThoughtById)
    .delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction);
export { router as thoughtRouter };
