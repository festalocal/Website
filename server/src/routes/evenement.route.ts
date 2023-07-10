import { Router } from 'express';
import { getAllEvenements, getEvenementOfId } from '../controllers/evenement.controller';

const router = Router();

// Definition of all the routes
router.get('/fetes', getAllEvenements);
router.get('/fetes/:id', getEvenementOfId)

export default router;