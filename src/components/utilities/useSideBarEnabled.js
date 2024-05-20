import { createContext } from 'react';

export const useSideBarEnabled = createContext({
	sideBarEnabled: false,
	setSideBarFlag: () => {},
});
