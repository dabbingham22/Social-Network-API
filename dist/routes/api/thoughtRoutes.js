import { Router } from 'express';
const router = Router();
import { getAllThoughts, getThoughtById, createThought, } from '../../controllers/thoughtController.js';
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtById);
export { router as thoughtRouter };
