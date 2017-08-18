import express from 'express';
import { versionController } from './server-boot';

const router = express.Router();


router.get('/', versionController.version);

export default router;
