import { castEnvToBoolean, castEnvToNumber } from './utils';

export const CONFIG = Object.freeze({
	env: {
		current: process.env.NODE_ENV,
		isDevelopment: process.env.NODE_ENV === 'development',
		isProduction: process.env.NODE_ENV === 'production' || false,
	},
	client: {
		url: process.env.CLIENT_URL || '',
	},
	debug: {
		enabled: castEnvToBoolean(process.env.DEBUG_ENABLED, false),
		pretty: castEnvToBoolean(process.env.DEBUG_PRETTY, false),
		level: process.env.DEBUG_LEVEL,
	},
	server: {
		port: castEnvToNumber(process.env.SERVER_PORT, 3000),
	},
});
