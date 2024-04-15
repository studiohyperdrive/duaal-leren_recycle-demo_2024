import { pino } from 'pino';
import type { PrettyOptions } from 'pino-pretty';

import { CONFIG } from '~config';

export const logger = pino(
	CONFIG.debug.pretty
		? {
				transport: {
					target: 'pino-pretty',
					options: {
						colorize: true,
					} as PrettyOptions,
				},
		  }
		: {},
);
