module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['airbnb-base', 'prettier', 'plugin:html/recommended'],
	Plugins: ['html'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}', '*.handlebars'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {},
};
