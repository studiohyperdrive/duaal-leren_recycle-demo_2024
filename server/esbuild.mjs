import * as esbuild from 'esbuild';

await esbuild.build({
	entryPoints: ['./src/main.ts'],
	bundle: true,
	format: 'cjs',
	outdir: 'dist',
	outExtension: { '.js': '.cjs' },
	platform: 'node',
	target: 'node18',
	define: {
		'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
		'process.env.CLIENT_URL': `"${process.env.CLIENT_URL}"`,
		'process.env.SERVER_PORT': `"${process.env.SERVER_PORT}"`,
	},
});
