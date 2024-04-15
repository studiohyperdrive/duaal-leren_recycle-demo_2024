import { RequestHandler } from 'express';

import { GetPickupsDTO } from '../dto';

export const getPickups: RequestHandler<void, GetPickupsDTO> = async (req, res, next) => {
	try {
		const dto = [
			{ name: 'Grof huisvuil', id: 'grof' },
			{ name: 'Papier', id: 'papier' },
		];

		res.status(200).json(dto);
	} catch (error) {
		next(error);
	}
};
