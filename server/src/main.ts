import { CONFIG } from '~config';

import app from './app';
import { logger } from './modules/shared';

const start = async () => {
	app.listen(CONFIG.server.port, () => {
		logger.info(`Server is listening on :${CONFIG.server.port}`);
	});
};

start();
