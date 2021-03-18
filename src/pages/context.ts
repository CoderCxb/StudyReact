import { createContext } from 'react';

const contextContent = {
	frame: 'React',
	info: {
		why: 'study',
		version: 1.0,
	},
};
const context = createContext(contextContent);

export { context, contextContent };
