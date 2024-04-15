import { pinoHttp } from 'pino-http';

import { logger } from '~shared';

export const loggerMiddleware = [pinoHttp({ logger })];
