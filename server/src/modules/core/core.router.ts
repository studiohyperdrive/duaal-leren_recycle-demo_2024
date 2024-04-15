import { Router } from 'express';

import { coreController } from './controllers';

const coreRouter = Router();

coreRouter.get('/status', coreController.status);

export default coreRouter;
