import cors from 'cors';
import helmet from 'helmet';

import { CONFIG } from '~config';

export const securityMiddleware = [
	helmet({
		contentSecurityPolicy: {
			directives: {
				connectSrc: [
					"'self'",
					'https://login.microsoftonline.com',
					'https://covestro.sharepoint.com',
					'https://graph.microsoft.com',
				],
				imgSrc: ["'self'", 'data:', 'blob:'],
			},
		},
	}),
	cors({ origin: CONFIG.client.url }),
];
