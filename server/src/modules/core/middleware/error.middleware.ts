import { ErrorRequestHandler } from 'express';
import createError from 'http-errors';

import { logger } from '~shared';

export const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
	logger.error(err);

	if (res.headersSent) {
		return next(err);
	}

	// Default to 500 internal server error
	const internalServerError = new createError.InternalServerError();

	const status = err.statusCode || internalServerError.statusCode;
	const message = err.message || internalServerError.message;

	res.status(status).json({ message });
};
