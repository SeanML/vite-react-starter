export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		// Handle module aliases (if you have set any in your TypeScript config)
		'^@/(.*)$': '<rootDir>/src/$1',

		// Handle CSS imports (if you are using CSS modules)
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',

		// Handle image imports
		'\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.ts',
	},
	transform: {
		// Use babel-jest to transpile tests in the node_modules folder
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.json',
			},
		],
	},
	transformIgnorePatterns: [
		// Ignore node_modules except for any package you might need to transpile
		// (e.g., if you use ES modules from a specific package)
		'/node_modules/(?!your-es-module-package).+\\.js$',
	],
};
