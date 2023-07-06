import { Router } from 'express';
import { getAllEvenements } from '../controllers/evenement.controller';

const router = Router();

// Definition of all the routes
router.get('/fetes', getAllEvenements);

export default router;