import express from 'express';
import { getAllTasks, getTaskById } from '../controllers/TaskController';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById)

export default router;