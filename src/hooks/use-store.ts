import { AppStoreModel, getAppStore } from '../store/index';
import { createContext, useContext } from 'react';
import { checkMissingObserver } from '../utils/check-missing-observer';

const StoreContext = createContext<AppStoreModel>(getAppStore());

export const useStore = (): AppStoreModel => {
  checkMissingObserver(useStore);
  return useContext(StoreContext);
};
export const StoreProvider = StoreContext.Provider;
