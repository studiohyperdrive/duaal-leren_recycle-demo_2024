import { Router } from 'express';

import { coreRouter } from './modules/core';
import pickupsRouter from './modules/pickups/pickups.router';

const v1Router = Router();

v1Router.use('/pickups', pickupsRouter);

const appRouter = Router();

appRouter.use('/api/v1', v1Router);
appRouter.use('/api', coreRouter);

export default appRouter;
