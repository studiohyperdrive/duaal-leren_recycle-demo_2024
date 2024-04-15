import express from 'express';

import appRouter from './app.router';
import { coreMiddleware } from './modules/core';
import { errorMiddleware } from './modules/core/middleware/error.middleware';

const app = express();

// Middleware
app.use(coreMiddleware);

// Routes
app.use(appRouter);

// Error handling
app.use(errorMiddleware);

export default app;
