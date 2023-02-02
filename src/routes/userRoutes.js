import express from 'express';
import { getUser, getAllUsers, createUser } from '../controllers/userControllers.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);

export default router;