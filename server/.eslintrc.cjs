const allowedAliases = ['config', 'core', 'shared'];
const modulesPathGroupPattern = `~{${allowedAliases.join(',')}}`;

module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	rules: {
		'sort-imports': [
			'warn',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],

		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/order': [
			'warn',
			{
				alphabetize: {
					order: 'asc',
				},
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: modulesPathGroupPattern,
						group: 'parent',
						position: 'before',
					},
				],
			},
		],
	},
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	settings: {
		'import/resolver': {
			typescript: true,
			node: true,
		},
	},
};
