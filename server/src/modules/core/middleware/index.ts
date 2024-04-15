import { loggerMiddleware } from './logger.middleware';
import { parserMiddleware } from './parser.middleware';
import { securityMiddleware } from './security.middleware';

export const coreMiddleware = [...parserMiddleware, ...securityMiddleware, ...loggerMiddleware];
