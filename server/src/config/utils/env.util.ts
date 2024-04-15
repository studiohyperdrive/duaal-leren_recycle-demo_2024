export const castEnvToBoolean = (envVar: string | undefined, defaultValue = false) =>
	envVar === 'true' ?? defaultValue;

export const castEnvToNumber = (envVar: string | undefined, defaultValue?: number) => {
	return envVar ? parseInt(envVar, 10) || defaultValue : defaultValue;
};
