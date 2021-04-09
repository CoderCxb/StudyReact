import { createContext } from 'react';

const defaultContext = {
	frame: 'React',
	info: {
		why: 'study',
		version: 1.0,
	},
};
// 默认值
const MyContext = createContext(defaultContext);

export { MyContext, defaultContext };
