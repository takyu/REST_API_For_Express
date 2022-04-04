/**
 * nodejs の場合は、
 *
 * const express = require('express');
 * const router = express.Router;
 */
import { Router } from "express";

const router = Router();

import { createTodo, getTodos, updateTodo, deleteTodo} from '../controllers/todos'

// Create
router.post('/', createTodo);

// Read
router.get('/', getTodos);

// Update
router.patch('/:id', updateTodo);

// Delete
router.delete('/:id', deleteTodo);

export default router;
