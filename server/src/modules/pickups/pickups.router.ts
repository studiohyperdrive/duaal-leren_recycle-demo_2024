import { Router } from 'express';

import { pickupsController } from './controllers';

const pickupsRouter = Router();

pickupsRouter.get('/', pickupsController.getPickups);

export default pickupsRouter;
