import { RequestHandler } from 'express';

export const status: RequestHandler = async (req, res) => {
	res.sendStatus(200);
};
